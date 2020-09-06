import React, { useState } from "react";

function useInputValue() {
  const [value, setValue] = useState("");
  
  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    value: () => value,
    clear: () => setValue(""),
  };
}

export default function AddTodo({ onCreate }) {
  const input = useInputValue();

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear()
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add Todo!</button>
    </form>
  );
}
