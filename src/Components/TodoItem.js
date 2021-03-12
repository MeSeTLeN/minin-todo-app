import React from "react";

function TodoItem(props) {
  const classes = [];
  if (props.todo.completed) {
    classes.push("done");
  }

  return (
    <li className={classes.join(" ")}>
      {props.todo.title}
    </li>
  );
}

export default TodoItem;
