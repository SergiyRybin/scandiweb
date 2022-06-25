import { gql } from "@apollo/client";

export const fetchAllData = gql`
  query data {
    categories {
      name
      products {
        id
        name
        inStock
        category
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;
