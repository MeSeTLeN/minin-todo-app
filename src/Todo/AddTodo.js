import React, { useState } from "react";

export default function AddTodo({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");

  function submitTodoHandler(e) {
    e.preventDefault();

    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { title: inputValue, completed: false, id: Math.random() * 1000 },
      ]);
    }
    setInputValue("");
  }

  function inputValueHandler(e) {
    setInputValue(e.target.value);
  }

  return (
    <form onSubmit={submitTodoHandler}>
      <input value={inputValue} onChange={inputValueHandler} />
      <button type="submit">Add Todo</button>
    </form>
  );
}
