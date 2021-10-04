import { gql } from "@apollo/client";

export const countryQuery = gql`
  query {
    countries {
      name
      capital
      emoji
      languages {
        name
      }
      currency
    }
  }
`;

