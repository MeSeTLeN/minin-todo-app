import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [todoValue, setTodoValue] = useState("");
  return {
    bind: {
      value: todoValue,
      onChange: (event) => setTodoValue(event.target.value),
    },
    clear: () => setTodoValue(""),
    value: () => todoValue,
  };
}

function AddTodo({ onCreateMethod }) {
  const input = useInputValue("");

  function submitMethod(event) {
    event.preventDefault();

    if (input.bind.value.trim()) {
      onCreateMethod(input.bind.value);
      input.clear();
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitMethod}>
      <input {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreateMethod: PropTypes.func.isRequired,
};

export default AddTodo;
