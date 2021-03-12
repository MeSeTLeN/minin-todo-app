import React, { useState } from "react";

export default function AddTodo({ onCreateMethod }) {
  const [todoValue, setTodoValue] = useState("");

  function submitMethod(event) {
    event.preventDefault();

    if (todoValue.trim()) {
      onCreateMethod(todoValue);
      setTodoValue("");
    }
  }

  return (
    <form onSubmit={submitMethod}>
      <input
        value={todoValue}
        onChange={(event) => setTodoValue(event.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
