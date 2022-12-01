import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    credentials: 'include',
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
})