import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ filteredTodos }) {
  return (
    <ul
      style={{
        listStyle: "none",
        color: "#fff",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      {filteredTodos.map((todo, i) => (
        <TodoItem todo={todo} index={i} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
