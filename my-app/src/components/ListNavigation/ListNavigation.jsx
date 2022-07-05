import style from "../ListNavigation/ListNavigation.module.css";

export const ListNavigatin = ({ data }) => {
  const dataFromLink = (e) => {
    console.log(e.target.textContent);
  };

  return (
    <li className={style.ListNavigatin}>
      <p onClick={(e)=>dataFromLink(e)}>{data.name}</p>
      {/* <a href='/' onClick={(e)=>dataFromLink(e)}>{data.name}</a> */}
    </li>
  );
};
