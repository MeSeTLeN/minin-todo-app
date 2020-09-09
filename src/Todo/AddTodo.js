import React, { useState } from "react";
import "./AddTodo.css";
import PropTypes from "prop-types";

// custom hook for input
function useInputValue(defaultValue = "") {
  const [inputValue, setInputValue] = useState("");

  // bind value means value={inputValue} if put it in input
  return {
    bind: {
      value: inputValue,
      onChange: (event) => setInputValue(event.target.value),
      placeholder: "Write your todo here",
      className: "addTodo-input",
    },
    value: () => inputValue,
    clear: () => setInputValue(""),
  };
}

// component
function AddTodo({ onCreate }) {
  const input = useInputValue("");

  // handle value to put it into setTodos
  function submitHandler(event) {
    // prevent from updating
    event.preventDefault();

    // trim() delete empty space
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form onSubmit={submitHandler} className="addTodo">
      {/* using custom hook ...input.bind */}
      <input {...input.bind} />
      <button type="submit" className="addTodo-btn">
        Add Todo
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
