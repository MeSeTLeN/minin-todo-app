import React from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, i, onChangeTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onChangeTodo(todo.id)}
      />
      {i + 1 + " " + todo.title}
    </li>
  );
}

TodoItem.propTypes = {
  onChangeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
