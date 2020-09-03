import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, index, onChange }) {
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className={classes.join(" ")}>
      <span>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        <strong>{index + 1}</strong>
        {todo.title}
      </span>
      <button>&times;</button>
    </li>
  );
}

export default TodoItem;
