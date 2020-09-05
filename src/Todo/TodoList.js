import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    color: "#fff",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, i) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          index={i}
          onChange={props.onToggle}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
