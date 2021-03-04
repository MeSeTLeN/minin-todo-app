import React, { useState } from "react";
import PropTypes from 'prop-types'

function AddTodo({onCreateMethod}) {
  const [todoValue, setTodoValue] = useState("");

  function submitMethod(event) {
      event.preventDefault()

      if(todoValue.trim()){
          onCreateMethod(todoValue)
          setTodoValue('')
      }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitMethod}>
      <input value={todoValue} onChange={(event)=>setTodoValue(event.target.value)} />
      <button type="submit">Add todo</button>
    </form>
  );
}

AddTodo.propTypes={
    onCreateMethod: PropTypes.func.isRequired
}

export default AddTodo;
