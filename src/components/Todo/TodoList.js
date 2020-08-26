import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
  },
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todoData.map((todo, index) => (
        <TodoItem todo={todo} key={todo.id} index={index} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;