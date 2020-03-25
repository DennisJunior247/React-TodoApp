import React from "react";
import "../styles/TodoItems.module.css"
const TodoItems = props => {
  return (
    <ul>
      {props.individualItem.map((item, i) => (
        <li key={i}>
          {item}
          <button onClick={() => props.handleRemoveOneItem(item)}>X</button>
        </li>
      ))}
    </ul>
  );
};
export default TodoItems;
