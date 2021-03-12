import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
  const classes = [];
  if (props.todo.completed) {
    classes.push("done");
  }

  return (
    <li className={classes.join(" ")}>
      {props.i + 1 + " " + props.todo.title}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
};

export default TodoItem;
