import { useQuery } from "@apollo/client";
import style from "../NavBar/NavBar.module.css";
import { fetchCategories } from "../../services/fetchData";
import { List } from "../List/List";
import { Currensy } from "../Currensy/Currensy";
import { useState } from "react";
import { Cart } from "../Cart/Cart";

export const NavBar = ({modal}) => {
  const [openCart, setOpenCart] = useState(false)
  const { data, loading, error } = useQuery(fetchCategories);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const closeCart = () =>{
    setOpenCart(false)
  }

  return (
    <>
      <header className={style.NavBar}>
        <nav>
          <List data={data} modal={modal} open={closeCart}/>
        </nav>
        <div className={style.Item}>
          <Currensy />
          <button onClick={()=>setOpenCart(true)}></button>
        </div>
      </header>
      {openCart && <Cart openCa={closeCart} />}
    </>
  );
};
