import { ListNavigatin } from "../ListNavigation/ListNavigation";
import style from "../List/List.module.css";
export const List = ({ data, modal, open }) => {
  return (
    <ul className={style.Navigatin}>
      {data.categories.map((el, index) => (
        <ListNavigatin data={el} key={index} modal={modal} open={open}/>
      ))}
    </ul>
  );
};
