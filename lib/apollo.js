import React from 'react'
import cookie from 'cookie'
import ApolloClient from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory'
import Head from 'next/head'
import {HttpLink} from "apollo-link-http";
import {setContext} from "apollo-link-context";
import { ApolloProvider } from '@apollo/react-hooks'
import fetch from 'node-fetch';

export function withApollo(Page, { ssr = true } = {}) {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
        const client = apolloClient || initApolloClient(apolloState, { getToken })
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
            const { AppTree } = ctx;

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
                        const { getDataFromTree } = await import('@apollo/react-ssr');
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

function createApolloClient(initialState = {}, { getToken }) {
    const fetchOptions = {};

    const httpLink = new HttpLink({
        uri: "https://api.akyre.alloin.me",
        fetch
        /*credentials: 'omit',
        fetch,
        fetchOptions,*/
    });

    const authLink = setContext((req, { headers }) => {
        const token = getToken();
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}`: ''
            }
        }
    });

    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: authLink.concat(httpLink),
        cache: new InMemoryCache().restore(initialState),
    })
}

function getToken(req) {
    const cookies = cookie.parse(req ? req.headers.cookie || '' : document.cookie);
    return cookies.token
}
