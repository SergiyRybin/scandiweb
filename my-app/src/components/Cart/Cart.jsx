import { createPortal } from "react-dom";
import { Container } from "../Container/Container";
import style from "../Cart/Cart.module.css";
import { useSelector } from "react-redux";
import { readProductStore } from "../../redux/reduser/reduser";
const modalCart = document.querySelector("#modalCart");

export const Cart = ({ openCa }) => {
  const value = useSelector(readProductStore);
  console.log(value);

  const blockScrol = () => {
    document.body.style.overflow = "hidden";
  };

  return createPortal(
    <Container>
      <div className={style.Modal} scroll={blockScrol()}>
        <h1>Cart</h1>
        <ul>
          {value.map((el, index) => (
            <>
            
           
            <li key={index}>{el.name}
            <img src={el.image} alt="" />
            </li>
           
            </>
          ))}
        </ul>
      </div>
    </Container>,
    modalCart
  );
};
