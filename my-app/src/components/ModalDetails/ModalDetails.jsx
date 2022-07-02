import { createPortal } from "react-dom";
import { fetchProductDetails } from "../../services/fetchData";
import style from "../ModalDetails/ModalDetails.module.css";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Container } from "../Container/Container";

const modalRoot = document.querySelector("#modalDetails");

export const ModalDetails = ({ dataId, dataImg }) => {
  const [currentImg, setCurrentImg] = useState(dataImg);

  const { data, loading, error } = useQuery(fetchProductDetails, {
    variables: { id: `${dataId}` },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);

  return createPortal(
    // <div className={style.Overlay}>
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
                {el.items.map((el, index) => (
                  <li className={style.Item} key={index}>
                    {el.displayValue}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p>
            {data.product.prices[0].currency.symbol}
            {data.product.prices[0].amount}
          </p>
          <button>add to cart</button>
          <div
            className={style.SecondDescr}
            dangerouslySetInnerHTML={{ __html: data.product.description }}
          ></div>
        </div>
      </div>
    </Container>,
    // </div>
    modalRoot
  );
};
