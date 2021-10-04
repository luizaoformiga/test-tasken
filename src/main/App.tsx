import React from "react";
import { ApolloProvider } from "@apollo/client";

import { client } from "../infra/services";
import { Router } from "../presentation/routes";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default App;
