import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({
    uri: 'http://13.36.254.232/graphql',
    cache: new InMemoryCache(),
});



export default client;