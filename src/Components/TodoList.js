import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} />;
      })}
    </ul>
  );
}

export default TodoList;
