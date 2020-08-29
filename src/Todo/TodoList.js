import React from "react";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function TodoList({ todos, onToggle }) {
  return (
    <ul style={styles.ul}>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} onChange={onToggle} />
      ))}
    </ul>
  );
}

export default TodoList;
