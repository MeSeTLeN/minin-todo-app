import React from "react";

function TodoItem({ todo, index, onChange }) {
  return (
    <li>
      <span>
        <input type="checkbox" onChange={() => onChange(todo.id)} />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button>&times;</button>
    </li>
  );
}

export default TodoItem;
