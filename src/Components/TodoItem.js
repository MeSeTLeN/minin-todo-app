import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

function TodoItem(props) {
  const classes = [];
  if (props.todo.completed) {
    classes.push("done");
  }

  const { removeTodo } = useContext(Context);

  return (
    <li className={classes.join(" ")}>
      <input
        checked={props.todo.completed}
        type="checkbox"
        onChange={() => props.changeCompletedMethodItem(props.todo.id)}
      />
      {props.i + 1 + " " + props.todo.title}
      <button onClick={() => removeTodo(props.todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
};

export default TodoItem;
