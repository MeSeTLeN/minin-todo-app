import React from "react";

export default function TodoItem({ todo, i }) {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} />
      {i + 1 + " " + todo.title}
      <button>&times;</button>
    </li>
  );
}
