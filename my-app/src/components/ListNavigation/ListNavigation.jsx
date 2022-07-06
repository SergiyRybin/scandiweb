import style from "../ListNavigation/ListNavigation.module.css";
import { useDispatch } from "react-redux";
import { addCurentCategory } from "../../redux/reduser";

export const ListNavigatin = ({ data, modal }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.ListNavigatin}>
      {/* <p onClick={(e) => dispatch(addCurentCategory(e.target.textContent))}>
        {data.name}
      </p> */}
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
