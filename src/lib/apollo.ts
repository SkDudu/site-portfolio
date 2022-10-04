import { ApolloClient, from, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: process.env.ENDPOINT_CONNCTION,
    cache: new InMemoryCache()
})