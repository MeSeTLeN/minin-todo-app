import React, { useContext } from "react";
import "./TodoItem.css";
import Context from "../context";

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
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
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

export default TodoItem;
