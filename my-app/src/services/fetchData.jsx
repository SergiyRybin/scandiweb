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

// export function useFetchPr () {
//   const { data, loading, error } = useQuery(fetchProducts);

//   if (loading) return "Loading...";
//   if (error) return `Error! ${error.message}`;
//   console.log(data)

//   // const allCategory = data.categories[0];
//   // return allCategory;
// };

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


// export const useProductsList = () => {
  
//   const { data, loading, error } = useQuery(fetchProducts);

//   if (loading) return "Loading...";
//   if (error) return `Error! ${error.message}`;
//   if(data) return data
//   // console.log(data)
// };

// const Udat =()=>{
//  const da = useProductsList()}