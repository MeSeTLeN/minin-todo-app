import React from "react";

export default function TodoItem({ todo, i, todos, setTodos }) {
  function completeTodoHandler(params) {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          el.completed = !el.completed;
        }
        return el;
      })
    );
  }

  return (
    <li>
      <input
        onChange={completeTodoHandler}
        type="checkbox"
        checked={todo.completed}
      />
      {i + 1 + " " + todo.title}
      <button>&times;</button>
    </li>
  );
}
