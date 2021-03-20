import React, { useContext, useState } from 'react'
import MyContext from '../context'

export default function AddTodo() {
  const { addTodo } = useContext(MyContext)
  const [value, setValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()

    if (value.trim()) {
      addTodo(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type='submit'>Add Todo</button>
    </form>
  )
}
