import userRequest from '../graphql/user'

export default(apolloClient) =>
    apolloClient
        .query({
            query: userRequest.me,
        })
        .then(({ data }) => {
            return { loggedInUser: { user: data.me }}
        })
        .catch((err) => {
            console.error(err);
            return { loggedInUser: {}}
        })