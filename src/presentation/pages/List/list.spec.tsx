import { render } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";

import ApolloClient from "../../../infra/services/apollo";
import { List } from "./list";

describe("List", () => {
  test("Deve renderizar a página List", () => {
    render(
      <ApolloProvider client={ApolloClient}>
        <List />
      </ApolloProvider>
    );
  });
});
