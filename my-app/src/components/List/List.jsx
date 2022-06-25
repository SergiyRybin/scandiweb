import { ListNavigatin } from "../ListNavigation/ListNavigation";

export const List = ({ data }) => {
  return (
    <ul>
      {data.categories.map((el, index) => (
        <ListNavigatin data={el} key={index} />
      ))}
    </ul>
  );
};
