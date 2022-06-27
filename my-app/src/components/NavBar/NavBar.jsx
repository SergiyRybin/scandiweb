import { useQuery } from "@apollo/client";
import style from "../NavBar/NavBar.module.css";
import { fetchCategories } from "../../services/fetchData";
import { List } from "../List/List";

export const NavBar = ({nameSelect}) => {
  const { data, loading, error } = useQuery(fetchCategories);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <header className={style.NavBar}>
        <nav>
          <List data={data} />
        </nav>
        <div className={style.Items}>
          <form >
            <label>
              <select name="" id="" onChange={nameSelect}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="JPY">JPY</option>
              </select>
            </label>
          </form>
          <div><button>корзина</button></div>
        </div>
      </header>
    </>
  );
};
