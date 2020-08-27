import React, { useState } from "react";
import "./AddTodo.scss";
import PropTypes from "prop-types";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    // disable default action by preventDefault thats page will not reload
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
    // trim deleting unnecessary space
  }

  return (
    <form className="addtodo-form" onSubmit={submitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
