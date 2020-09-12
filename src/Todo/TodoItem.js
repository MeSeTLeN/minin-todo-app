import React, { useContext } from "react";
import context from "../context";

function TodoItem({ todo, index }) {
  const { removeTodo, toggleTodo } = useContext(context);
  return (
    <li style={{ justifyContent: "space-around", display: "flex" }}>
      <span>
        <input
          type="checkbox"
          onChange={() => toggleTodo(todo.id)}
          checked={todo.completed}
        />
        {index + 1} {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

export default TodoItem;
