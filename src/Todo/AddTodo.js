import React, { useState } from "react";

// custom hook for input
function useInputValue(defaultValue = "") {
  const [value, setValue] = useState("");

  // bind value means value={value} if put it in input
  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    value: () => value,
    clear: () => setValue(""),
  };
}

// component
function AddTodo({ onCreate }) {
  const input = useInputValue("");

  // handle value to put it into setTodos
  function submitHandler(event) {
    // prevent from updating
    event.preventDefault();

    // trim() delete empty space
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form onSubmit={submitHandler}>
      {/* using custom hook ...input.bind */}
      <input {...input.bind} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
