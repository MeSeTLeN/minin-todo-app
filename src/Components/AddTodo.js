import React, { useState } from "react";

function useInputValue() {
  const [todoValue, setTodoValue] = useState("");

  return {
    bind: {
      value: todoValue,
      onChange: (event) => setTodoValue(event.target.value),
    },
    value: () => todoValue,
    clear: () => setTodoValue(""),
  };
}

export default function AddTodo({ onCreateMethod }) {
  const input = useInputValue();

  function submitMethod(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreateMethod(input.value());
      input.clear();
    }
  }

  return (
    <form onSubmit={submitMethod}>
      <input {...input.bind} />
      <button type="submit">Add Todo</button>
    </form>
  );
}
