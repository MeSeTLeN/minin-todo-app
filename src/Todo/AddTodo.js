import React, { useState } from "react";
// import Context from "../context";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue('')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
