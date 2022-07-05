import style from "../ListNavigation/ListNavigation.module.css";
import { useDispatch } from "react-redux";
import { addCurentCategory } from "../../redux/reduser";

export const ListNavigatin = ({ data, nameCat }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.ListNavigatin}>
      <p onClick={(e) =>dispatch(addCurentCategory(e.target.textContent)) }>{data.name}</p>
    </li>
  );
};
