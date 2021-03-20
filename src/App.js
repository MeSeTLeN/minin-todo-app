import React, { useEffect, useState } from 'react'
import TodoList from './Todo/TodoList'
import MyContext from './context'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todos) => setTodos(todos))
  }, [])

  function onToggle(id) {
    setTodos(
      todos.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed
        }
        return el
      })
    )
  }

  function deleteTodo(id) {
    setTodos(todos.filter((el) => el.id !== id))
  }

  return (
    <MyContext.Provider value={{ onToggle, deleteTodo }}>
      <div className='App'>
        <TodoList todos={todos} />
      </div>
    </MyContext.Provider>
  )
}

export default App
