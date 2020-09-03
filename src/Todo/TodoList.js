import React from "react";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, i) => (
        <TodoItem todo={todo} key={todo.id} index={i} />
      ))}
    </ul>
  );
}

export default TodoList;
