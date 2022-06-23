import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ozlott1hst01z450vf2yo8/master',
    cache: new InMemoryCache()
})