import React from "react";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
  },
};

export default function TodoList(props) {
  return (
    <ul style={styles.ul}>
    { props.todoData.map((todo, i)=> <TodoItem todo={todo} key={todo.id} index={i} /> )}
    </ul>
  );
}
