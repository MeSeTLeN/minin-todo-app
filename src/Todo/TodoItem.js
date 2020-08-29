import React, { useContext } from "react";
import "./TodoItem.css";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    margin: "5px",
  },
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li style={styles.li} className={classes.join(" ")}>
      <span>
        <input
          type="checkbox"
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        {index + 1 + " "}
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

export default TodoItem;
