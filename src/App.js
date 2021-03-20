import React, { useEffect, useState } from 'react'
import TodoList from './Todo/TodoList'
import MyContext from './context'
import AddTodo from './Todo/AddTodo'
import Loader from './Loader'

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos)
        setLoading(false)
      })
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

  function addTodo(title) {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ])
  }

  return (
    <MyContext.Provider value={{ onToggle, deleteTodo, addTodo }}>
      <div className='App'>
        <AddTodo />
        {todos.length ? (
          <TodoList todos={todos} />
        ) : loading ? (
          <Loader />
        ) : (
          <p>No Todos</p>
        )}
      </div>
    </MyContext.Provider>
  )
}

export default App
