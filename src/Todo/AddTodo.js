import React, { useState } from "react";

function useInputValue() {
  const [value, setValue] = useState("");

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    value,
    clear: () => setValue(""),
  };
}

function AddTodo({ onCreateTodo }) {
  const input = useInputValue();

  function submitHandler(event) {
    event.preventDefault();

    if (input.value.trim()) {
      onCreateTodo(input.value);
      input.clear();
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
