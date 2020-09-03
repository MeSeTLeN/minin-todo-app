import React from "react";
import TodoItem from "./TodoItem";

const styles={
    ul:{
        listStyle:'none'
    }
}

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
