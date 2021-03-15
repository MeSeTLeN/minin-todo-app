import React, { useState } from "react";

export default function AddTodo({ onCreateTodo }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreateTodo(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}
