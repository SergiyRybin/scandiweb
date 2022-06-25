import { useQuery } from "@apollo/client";
import style from '../NavBar/NavBar.module.css'
import { fetchAllData } from "../../services/fetchData";

export const NavBar = () => {
  const { data, loading, error } = useQuery(fetchAllData);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <header className={style.NavBar}>
        <nav>
          <ul>
            {data.categories.map((el, index) => (
              <li key={index}>
                <a href="">{el.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
