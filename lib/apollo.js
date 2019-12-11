import React from 'react'
import cookie from 'cookie'
import ApolloClient from "apollo-client";
import {InMemoryCache} from 'apollo-cache-inmemory'
import Head from 'next/head'
import {HttpLink} from "apollo-link-http";
import {setContext} from "apollo-link-context";
import {ApolloProvider} from '@apollo/react-hooks'
import fetch from 'node-fetch';
import {WebSocketLink} from "apollo-link-ws";
import {split} from "apollo-link";
import {getMainDefinition} from "apollo-utilities";

export function withApollo(Page, {ssr = true} = {}) {
    const WithApollo = ({apolloClient, apolloState, ...pageProps}) => {
        const client = apolloClient || initApolloClient(apolloState, {getToken})
        return (
            <ApolloProvider client={client}>
                <Page {...pageProps} />
            </ApolloProvider>
        )
    };

    if (process.env.NODE_ENV !== 'production') {
        // Handle development status.
    }

    if (ssr || Page.getInitialProps) {
        WithApollo.getInitialProps = async ctx => {
            const {AppTree} = ctx;

            const apolloClient = (ctx.apolloClient = initApolloClient(
                {},
                {
                    getToken: () => getToken(ctx.req)
                }
            ));

            const pageProps = Page.getInitialProps
                ? await Page.getInitialProps(ctx)
                : {};

            if (typeof window === 'undefined') {
                if (ctx.res && ctx.res.finished) {
                    return {}
                }

                if (ssr) {
                    try {
                        const {getDataFromTree} = await import('@apollo/react-ssr');
                        await getDataFromTree(
                            <AppTree
                                pageProps={{
                                    ...pageProps,
                                    apolloClient
                                }}
                            />
                        )
                    } catch (error) {
                        console.error('Error while running `getDataFromTree`', error)
                    }
                }

                Head.rewind()
            }

            const apolloState = apolloClient.cache.extract();

            return {
                ...pageProps,
                apolloState
            }
        }
    }

    return WithApollo
}

let apolloClient = null;

// Create a new apollo client on SS and reuse one in CS
function initApolloClient(...args) {
    // Create a new apollo client on serverSide.
    if (typeof window === 'undefined') {
        return createApolloClient(...args)
    }

    // Reuse on client side.
    if (!apolloClient) {
        apolloClient = createApolloClient(...args)
    }

    return apolloClient
}

function createApolloClient(initialState = {}, {getToken}) {
    const httpLink = new HttpLink({
        uri: "https://api.akyre.alloin.me",
        fetch
    });

    const wsLink = (typeof window !== 'undefined' && getToken()) ? new WebSocketLink({
        uri: `wss://api.akyre.alloin.me/graphql`,
        options: {
            reconnect: true,
            connectionParams: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    }) : null;

    const authLink = setContext((req, {headers}) => {
        const token = getToken();
        return {
            headers: {
                ...headers,
                Authorization: token ? `Bearer ${token}` : ''
            },
        }
    });

    const link = authLink.concat(
        (typeof window !== 'undefined') ?
            split(({query}) => {
                const definition = getMainDefinition(query);
                return (
                    definition.kind === 'OperationDefinition' &&
                    definition.operation === 'subscription'
                );
            },
            wsLink,
            httpLink)
        :
            httpLink
    );

    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link,
        cache: new InMemoryCache().restore(initialState),
    })
}

function getToken(req) {
    const cookies = cookie.parse(req ? req.headers.cookie || '' : document.cookie);
    return cookies.token
}
