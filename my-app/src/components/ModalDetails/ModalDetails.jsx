import { createPortal } from "react-dom";
import { fetchProductDetails } from "../../services/fetchData";
import style from "../ModalDetails/ModalDetails.module.css";
import { useQuery } from "@apollo/client";
import { Container } from "../Container/Container";
import { useState } from "react";

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
    <div className={style.Overlay}>
      <div className={style.Modal}>
        <div>
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
        <div>
          <img src={currentImg} alt="" width={400} />
        </div>
        <div>
          <h2>{data.product.name}</h2>
          <p>{data.product.brand}</p>
          {data.product.attributes.map((el) => (
            <>
              <p key={el.id}>{el.id}:</p>
              {el.items.map((el) => (
                <button>{el.value}</button>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>,
    modalRoot
  );
};
