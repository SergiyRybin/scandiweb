import { useQuery } from "@apollo/client";
import style from "../NavBar/NavBar.module.css";
import { fetchCategories } from "../../services/fetchData";
import { List } from "../List/List";
import { Currensy } from "../Currensy/Currensy";

export const NavBar = ({modal}) => {
  const { data, loading, error } = useQuery(fetchCategories);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <header className={style.NavBar}>
        <nav>
          <List data={data} modal={modal} />
        </nav>
        <div className={style.Item}>
          <Currensy />
          <button></button>
        </div>
      </header>
    </>
  );
};
