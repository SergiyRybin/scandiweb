import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addToStore, currencyCategore, currencyValue } from "../../redux/reduser/reduser";
import { fetchProducts } from "../../services/fetchData";
import style from "../ProductsList/ProductsList.module.css";

import { useDispatch } from "react-redux";

export const ProductsList = ({ modal }) => {
  const { data, loading, error } = useQuery(fetchProducts);
  const [addProduct, setAddProduct] = useState();
  const value = useSelector(currencyValue);
  const currentCat = useSelector(currencyCategore);
  const dispatch = useDispatch();

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const allCategory = data.categories
    .filter((el) => el.name === currentCat)
    .map((el) => el.products);

  const showButtonAddProduct = (e) => {
    setAddProduct(e.target.id);
  };

  return (
    <>
      <h1>Category: {currentCat}</h1>
      <ul className={style.ProductsList}>
        {allCategory[0].map((el, index) => {
          if (index <= 3) {
            return (
              <li
                key={index}
                id={el.id}
                onClick={() => {
                  modal(el.id, el.gallery[0]);
                }}
                onMouseEnter={showButtonAddProduct}
                onMouseLeave={() => {
                  setAddProduct("");
                }}
              >
                <img src={el.gallery[0]} alt={el.name} />
                {addProduct === el.id && (
                  <button
                    className={style.AddProduct}
                    onClick={() => {
                      dispatch(addToStore({ store: "Add" }));
                    }}
                  >
                    Add
                  </button>
                )}
                <div className={style.Name}>
                  <p>{el.name}</p>
                  <p>
                    {el.prices
                      .filter((e) => e.currency.label === value.label)
                      .map((i) => i.currency.label + " " + i.amount)}
                  </p>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};
