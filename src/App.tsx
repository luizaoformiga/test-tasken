import { ApolloProvider } from '@apollo/client';
import ApolloClient from './services/apollo';
import Router from './routes/router';

export default function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <Router />
    </ApolloProvider>  
  )
}

