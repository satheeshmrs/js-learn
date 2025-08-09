import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //var items = ["London", "Paris", "New York", "Tokyo", "Berlin"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   const getMessage = () => {
  //     if (items.length === 0) {
  //       return <p>No items found</p>;
  //     }
  //     return null;
  //   };

  // Event Handler
  const handleItemClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
