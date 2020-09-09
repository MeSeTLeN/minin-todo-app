import React, { useContext } from "react";
import context from "../context";

function TodoItem({ todo, index }) {
  const { completeTodo, removeTodo } = useContext(context);

  return (
    <li style={todo.completed ? { textDecoration: "line-through" } : null}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => completeTodo(todo.id)}
      />
      {index + 1} {todo.title}
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

export default TodoItem;
