import { useQuery, gql } from "@apollo/client";
import { Component } from "react";

// class ExchangeRates extends Component {
//   state = {
//     dataName: [],
//   };

//   getData = () => {
//     const { data } = useQuery(gql`
//       query data {
//         categories {
//           name
//           products {
//             id
//             name
//             inStock
//             category
//             gallery
//             description
//             category
//             attributes {
//               id
//               name
//               type
//               items {
//                 displayValue
//                 value
//                 id
//               }
//             }
//             prices {
//               currency {
//                 label
//                 symbol
//               }
//               amount
//             }
//             brand
//           }
//         }
//       }
//     `);

//     if (data) {
//      console.log(data)
//     }
//   };
//   render() {
//     const dataobg = this.getData()
//     console.log(dataobg)
//     return <></>;
//   }

  // this.props.onSave()
  //   if (data) {
  //     // console.log(data);
  //   return
  //     // data.categories.map((el, index) => (
  //     //   <div key={index}>
  //     //     <p>{el.name}</p>
  //     //   </div>
  //     // ));
  //   }
// }

function ExchangeRates() {
  const { data } = useQuery(gql`
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
  `);

  if (data) {
    console.log(data);
  }
}
export default ExchangeRates;
