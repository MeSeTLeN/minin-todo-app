import React, { useState } from "react";
import "./AddTodo.scss";
import PropTypes from "prop-types";

// custom hook
function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();
    // disable default action by preventDefault thats page will not reload
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
    // trim deleting unnecessary space
  }

  return (
    <form className="addtodo-form" onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
