import style from "../Currensy/Currensy.module.css";
import { fetchCurrencies } from "../../services/fetchData";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export const Currensy = () => {
  const [isActive, setActive] = useState(false);
  const [symbol, setSymbol] = useState("$");
  const { data, loading, error } = useQuery(fetchCurrencies);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const currencies = data.currencies;

  const toggleClass = () => {
    setActive(!isActive);
  };
 
  const currenciesValue = (el, e) => {
    console.log(e.target);
    setActive(!isActive);
    setSymbol(el.symbol);
  };
  return (
    <>
      <div className={style.SelectValue} onClick={toggleClass}>
        <p>{symbol}</p>
        <span>^</span>
      </div>

      <ul className={isActive ? "listCurrency hide" : "listCurrency"}>
        {currencies.map((el, index) => (
          <li
            className={style.List}
            key={index}
            onClick={(e) => {
              currenciesValue(el, e);
            }}
          >
            {el.symbol} {el.label}{" "}
          </li>
        ))}
      </ul>
    </>
  );
};
