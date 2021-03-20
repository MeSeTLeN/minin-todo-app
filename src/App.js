import React, { useEffect, useState } from 'react'
import TodoList from './Todo/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todos) => setTodos(todos))
  }, [])

  return (
    <div className='App'>
      <TodoList todos={todos} />
    </div>
  )
}

export default App
