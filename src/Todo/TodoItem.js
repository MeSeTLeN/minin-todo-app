import React, { useContext } from "react";
import PropTypes from "prop-types";
import MyContext from "../context";

function TodoItem({ todo, i, onChangeTodo }) {
  const { removeTodo } = useContext(MyContext);
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onChangeTodo(todo.id)}
      />
      {i + 1 + " " + todo.title}
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  onChangeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
