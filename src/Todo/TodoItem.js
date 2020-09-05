import React, { useContext } from "react";
import "./TodoItem.css";
import context from "../context";

function TodoItem({ todo, index, onChange }) {
  // using func removeTodo from App.js from context
  const { removeTodo } = useContext(context);

  // class container
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className={classes.join(" ")}>
      <span>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />{" "}
        {index + 1} {todo.title}{" "}
      </span>

      {/* same onClick={removeTodo.bind(null, todo.id)} */}
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

export default TodoItem;
