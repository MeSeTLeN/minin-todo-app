import React from "react";
import PropTypes from "prop-types";

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
  console.log("todo", todo);
  return (
    <li style={styles.li}>
      <span>
        <input
          type="checkbox"
          style={styles.input}
          onChange={() => onChangeCompletedTodoItemFun(todo.id)}
        />
        <strong>{i + 1} &nbsp;</strong>
        {todo.title}
      </span>
      <button className="rm">&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  onChangeCompletedTodoItemFun: PropTypes.func.isRequired,
};

export default TodoItem;
