import React from "react";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    color: "#fff",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

function TodoList() {

  return (
    <ul style={styles.ul}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
}

export default TodoList;
