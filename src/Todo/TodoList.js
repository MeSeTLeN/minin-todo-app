import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, i) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            i={i}
            onChangeCompletedTodoItemFun={props.onChangeCompletedTodoListMethod}
          />
        );
      })}
    </ul>
  );
}

TodoList.protoTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeCompletedTodoListMethod: PropTypes.func.isRequired,
};

export default TodoList;
