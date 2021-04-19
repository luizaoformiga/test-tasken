import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://countries-274616.ew.r.appspot.com.'
})

const client = new ApolloClient({ 
  link: httpLink, cache: new InMemoryCache() 
})

export default client;
