import React from "react";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
  },
};

export default function TodoList() {
  return (
    <ul style={styles.ul}>
      <TodoItem />
      <li>1</li>
      <li>2</li>
    </ul>
  );
}
