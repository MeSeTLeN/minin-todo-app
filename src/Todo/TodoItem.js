import React from "react";

export default function TodoItem({ todo, i }) {
  return (
    <li>
      <strong>{i + 1} </strong>
      {todo.title}
    </li>
  );
}
