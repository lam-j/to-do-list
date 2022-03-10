import React from "react";
import Item from "./Item";

export default function ItemList(props) {
  return (
    <ul>
      {/* {props.itemList.length === 0 && <p>all done! :)</p>} */}
      {props.itemList.map((item, index) => {
        return (
          <Item
            key={item + index}
            id={index}
            text={item}
            onDelete={props.onDelete}
            onChange={props.onChange}
          />
        );
      })}
    </ul>
  );
}
