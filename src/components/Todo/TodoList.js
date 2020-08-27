import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import './TodoList.scss'

const styles = {
  ul: {
    listStyle: "none",
  },
};

function TodoList(props) {
  return (
    <ul className="styles" style={styles.ul}>
      {props.todoData.map((todo, index) => (
        <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;