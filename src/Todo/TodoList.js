import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  return (
    <ul style={{ listStyle: "none" }}>
      {todos.map((todo, i) => {
        return (
          <TodoItem
            todo={todo}
            key={i}
            i={i}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </ul>
  );
}
