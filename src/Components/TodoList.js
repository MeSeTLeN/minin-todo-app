import React from "react";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
  },
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} />;
      })}
    </ul>
  );
}

export default TodoList;
