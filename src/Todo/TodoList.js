import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ filteredTodos }) {
  return (
    <ul style={{listStyle:'none'}}>
      {filteredTodos.map((todo, index) => (
        <TodoItem todo={todo} index={index} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
