import React, { useContext } from "react";
import context from "../context";
import "./TodoItem.css";
import PropTypes from "prop-types";

function TodoItem({ todo, index }) {
  console.log(todo);
  const { removeTodo } = useContext(context);
  const { toggleTodo } = useContext(context);

  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className={classes.join(" ")}>
      <span style={{ display: "flex", display: "inline-block" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {index + 1} {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.exact({
    userId: PropTypes.number,
    id: PropTypes.number,
    completed: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,
};

export default TodoItem;
