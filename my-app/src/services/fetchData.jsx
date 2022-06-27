import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

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

export const fetchCategories = gql`
  query data {
    categories {
      name
    }
  }
`;



export const fetchProducts = gql`
  query data {
    categories {
      products {
        id
        name
        inStock
        category
        gallery
        description
        category
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;


export const fetchProductDetails = gql`
query product($id: String!){
  product(id: $id){
    id
    name
    inStock
    gallery
    description
    category
    attributes{
      id
      name
      type
      items{
        displayValue
        value
        id
      }
    }
    prices{
      currency{
        label
        symbol
      }
      amount
    }
    brand
  }
}
`