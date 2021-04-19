import { gql } from '@apollo/client';

const countryQuery = gql`
  query {
    Country {
      _id
      name
      capital 
      population
      area
      flag {
        country {
          _id
          name
        }
      }
      subregion {
        name
      }
    } 
  }
`;

export default countryQuery;