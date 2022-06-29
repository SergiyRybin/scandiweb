import style from '../ListNavigation/ListNavigation.module.css'

export const ListNavigatin = ({ data }) => {
  return (
    <li className={style.ListNavigatin}>
      <a href="">{data.name}</a>
    </li>
  );
};
