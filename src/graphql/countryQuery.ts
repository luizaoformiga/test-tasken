import { gql } from '@apollo/client';

const countryQuery = gql`
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

export default countryQuery;