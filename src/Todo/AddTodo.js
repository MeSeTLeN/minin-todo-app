import React, { useState } from "react";

function useInputValue(params) {
  const [inputValue, setInputValue] = useState("");

  function inputValueHandler(e) {
    setInputValue(e.target.value);
  }

  return {
    bind: { value: inputValue, onChange: inputValueHandler },
    value: inputValue,
    clear: () => setInputValue(""),
  };
}

function AddTodo({ todos, setTodos }) {
  const input = useInputValue();

  function submitTodoHandler(e) {
    e.preventDefault();

    if (input.value.trim()) {
      setTodos([
        ...todos,
        { title: input.value, completed: false, id: Math.random() * 1000 },
      ]);
    }
    input.clear();
  }

  return (
    <form onSubmit={submitTodoHandler}>
      <input {...input.bind} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
