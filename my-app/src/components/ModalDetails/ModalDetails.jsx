import { useQuery } from "@apollo/client";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { currencyValue, readProductStore } from "../../redux/reduser/reduser";
import { fetchProductDetails } from "../../services/fetchData";
import { Container } from "../Container/Container";
import style from "../ModalDetails/ModalDetails.module.css";
import { addToStore } from "../../redux/reduser/reduser";

const modalRoot = document.querySelector("#modalDetails");

export const ModalDetails = ({ dataId, dataImg }) => {
  const [currentImg, setCurrentImg] = useState(dataImg);
  const [curentValue, setCurentValue] = useState();
  const [productToStore, setProductToStore] = useState();
  const valueCurrensy = useSelector(currencyValue);
  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(fetchProductDetails, {
    variables: { id: `${dataId}` },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const handelClick = (e) => {
    setCurentValue(e.target.textContent);

    setProductToStore((prev) => ({
      ...prev,
      name: data.product.name,
      [e.target.id]: e.target.textContent,
      image: currentImg,
    }));
  };

  const saveToStore = () => {
    dispatch(addToStore(productToStore));
  };
  return createPortal(
    <Container>
      <div className={style.Modal}>
        <div className={style.Gallery}>
          <ul>
            {data.product.gallery.map((el, index) => (
              <li key={index}>
                <img
                  src={el}
                  alt=""
                  width={80}
                  onClick={() => {
                    setCurrentImg(el);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={style.MainImage}>
          <img src={currentImg} alt="" />
        </div>
        <div className={style.Description}>
          <h2>{data.product.name}</h2>
          <p>{data.product.brand}</p>
          {data.product.attributes.map((el, index) => (
            <div key={index}>
              <p key={el.id}>{el.id}:</p>
              <ul className={style.List}>
                {el.items.map((e, index) => (
                  <li
                    id={el.id}
                    className={`${
                      curentValue === e.displayValue && style.ItemActive
                    } ${style.Item}`}
                    key={index}
                    onClick={handelClick}
                  >
                    {e.displayValue}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p>
            {data.product.prices
              .filter((e) => e.currency.label === valueCurrensy.label)
              .map((i) => i.currency.label + " " + i.amount)}
          </p>
          <button onClick={saveToStore}>add to cart</button>
          <div
            className={style.SecondDescr}
            dangerouslySetInnerHTML={{ __html: data.product.description }}
          ></div>
        </div>
      </div>
    </Container>,

    modalRoot
  );
};
