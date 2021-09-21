import React from "react";
import { ApolloProvider } from "@apollo/client";

import ApolloClient from "./services/apollo";
import Router from "./routes/router";
import { CreateGobalStyles } from "./styles/global";

const App: React.FC = () => {
  return (
    <ApolloProvider client={ApolloClient}>
      <CreateGobalStyles />
      <Router />
    </ApolloProvider>
  );
};

export default App;
