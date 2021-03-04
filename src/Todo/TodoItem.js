import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};

function TodoItem({ todo, i, onChangeCompletedTodoItemFun }) {
  const { removeTodo } = useContext(Context);

  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChangeCompletedTodoItemFun(todo.id)}
        />
        <strong>{i + 1} &nbsp;</strong>
        {todo.title}
      </span>
      <button className="rm" onClick={()=>removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  onChangeCompletedTodoItemFun: PropTypes.func.isRequired,
};

export default TodoItem;
