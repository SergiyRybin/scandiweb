import { ListNavigatin } from "../ListCard/ListNavigation";

export const List = ({ data }) => {
  return (
    <ul>
      {data.categories.map((el, index) => (
        <ListNavigatin data={el} key={index} />
      ))}
    </ul>
  );
};
