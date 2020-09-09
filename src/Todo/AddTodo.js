import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import context from "../context";

function useInputValue(defaultValue = "") {
  const [inputValue, setInputValue] = useState(defaultValue);

  return {
    bind: {
      value: inputValue,
      onChange: (event) => setInputValue(event.target.value),
    },
    value: () => inputValue,
    clear: () => setInputValue(""),
  };
}

function AddTodo({ addTodo }) {
  const useInput = useInputValue("");
  const { selectTodoHandler } = useContext(context);

  function inputValueHandler(event) {
    event.preventDefault();

    if (useInput.value().trim()) {
      addTodo(useInput.value());
      useInput.clear();
    }
  }

  return (
    <form onSubmit={inputValueHandler}>
      <input {...useInput.bind} />
      <button type="submit">Add Todo</button>
      <select onChange={selectTodoHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncomleted">Uncomleted</option>
      </select>
    </form>
  );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

useInputValue.propTypes = {
  inputValue: PropTypes.string.isRequired,
};

export default AddTodo;
