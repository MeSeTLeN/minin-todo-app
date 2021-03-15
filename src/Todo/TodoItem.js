import React from "react";

export default function TodoItem({ todo, i, onChangeTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onChangeTodo(todo.id)}
      />
      {i + 1 + " " + todo.title}
    </li>
  );
}
