import React, { useState } from "react";

function useAddValue(defaultValue = "") {
  const [addValue, setAddValue] = useState("");

  return {
    bind: {
      value: addValue,
      onChange: (e) => setAddValue(e.target.value),
    },
    addValue: () => addValue,
    clear: () => setAddValue(""),
  };
}

export default function AddTodo({ addTodo, setSelectedTodoOption }) {
  const inputValue = useAddValue("");

  function valueHandle(e) {
    e.preventDefault();

    if (inputValue.addValue().trim()) {
      addTodo(inputValue.addValue());
      inputValue.clear();
    }
  }

  function selectTodoHandler(e) {
    setSelectedTodoOption(e.target.value);
  }

  return (
    <>
      <form onSubmit={valueHandle}>
        <input type="text" {...inputValue.bind} />
        <button type="submit">Add Todo</button>
      </form>
      <select onChange={selectTodoHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
