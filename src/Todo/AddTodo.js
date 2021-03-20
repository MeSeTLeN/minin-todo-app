import React, { useContext, useState } from 'react'
import MyContext from '../context'

function useInputValue() {
  const [value, setValue] = useState('')

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    value,
    clear: () => setValue(''),
  }
}

function AddTodo() {
  const { addTodo } = useContext(MyContext)
  const input = useInputValue()

  function submitHandler(event) {
    event.preventDefault()

    if (input.value.trim()) {
      addTodo(input.value)
      input.clear()
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo
