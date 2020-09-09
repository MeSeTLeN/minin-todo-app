import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./TodoItem.css";
import context from "../context";

function TodoItem({ todo, index }) {
  // using func removeTodo from App.js from context
  const { removeTodo, toggleTodo } = useContext(context);

  // class container
  const spanClasses = [];
  const liClasses = ["li-item"];

  if (todo.completed) {
    spanClasses.push("done");

    // done-li class not overriding li bg cause css override from top to down .1 then .2 class 2 will override 1
    liClasses.push("done-li");
  }

  return (
    <li className={liClasses.join(" ")}>
      <span className={spanClasses.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />{" "}
        {index + 1} {todo.title}{" "}
      </span>

      {/* same onClick={removeTodo.bind(null, todo.id)} */}
      <button className="remove-btn" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
