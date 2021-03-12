import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const styles = {
  ul: {
    listStyle: "none",
  },
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, i) => {
        return (
          <TodoItem
            todo={todo}
            i={i}
            key={todo.id}
            changeCompletedMethodItem={props.changeCompletedMethodList}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
