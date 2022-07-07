import style from "../ListNavigation/ListNavigation.module.css";
import { useDispatch } from "react-redux";
import { addCurentCategory } from "../../redux/reduser/reduser";

export const ListNavigatin = ({ data, modal }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.ListNavigatin}>
     
      <a
        href=" "
        onClick={(e) => {
          e.preventDefault();
          dispatch(addCurentCategory(e.target.textContent));
         modal(false)
        }}
      >
        {data.name}
      </a>
    </li>
  );
};
