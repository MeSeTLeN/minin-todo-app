import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./TodoItem.scss";
import Context from "../../context";

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);

  let classCompleted = "";
  if (todo.completed) {
    classCompleted += " done";
  }

  return (
    <li>
      <span className={classCompleted}>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        <strong>{index + 1}</strong> &nbsp; {todo.title}{" "}
      </span>
      <button className="rm" onClick={removeTodo.bind(null,todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
