import React from "react";

function TodoItem({ todo, index }) {
  return (
    <li>
      <span>
        <input type="checkbox" />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button>&times;</button>
    </li>
  );
}

export default TodoItem;
