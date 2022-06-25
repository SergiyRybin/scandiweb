import { useQuery } from "@apollo/client";
import { fetchProducts } from "../../services/fetchData";
import style from "../ProductsList/ProductsList.module.css";

export const ProductsList = () => {
  const { data, loading, error } = useQuery(fetchProducts);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const allCategory = data.categories[0];

  return (
    <>
      <ul className={style.ProductsList}>
        {allCategory.products.map((el, index) => (
          <li key={index}>
            <img src={el.gallery[0]} alt={el.name} />
            <p>{el.name}</p>
            <p>{el.prices.map((d) => d.amount)}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
