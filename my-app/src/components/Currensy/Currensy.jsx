import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrensy, currencyValue } from "../../redux/reduser";
import { fetchCurrencies } from "../../services/fetchData";
import style from "../Currensy/Currensy.module.css";

export const Currensy = () => {
  const [isActive, setActive] = useState(false);
  const { data, loading, error } = useQuery(fetchCurrencies);
  
  const symbol = useSelector(currencyValue);
  const dispatch = useDispatch();

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const currencies = data.currencies;

  const toggleClass = () => {
    setActive(!isActive);
  };

  const currenciesValue = (el, e) => {
    setActive(!isActive);
    dispatch(addCurrensy({ currencies: el }));
  };

  return (
    <>
      <div className={style.SelectValue} onClick={toggleClass}>
        <p>{symbol.symbol}</p>
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
            {el.symbol}
            {el.label}
          </li>
        ))}
      </ul>
    </>
  );
};
