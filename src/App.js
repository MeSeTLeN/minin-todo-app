import React, { useEffect, useState } from "react";
import MyContext from "./context";
import AddTodo from "./Todo/AddTodo";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
  }, []);

  function todoCompleted(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          completed: false,
          title,
        },
      ])
    );
  }

  return (
    <MyContext.Provider value={{ removeTodo }}>
      <div className="App">
        <AddTodo onCreateTodo={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggleTodo={todoCompleted} />
        ) : (
          <p>No todos</p>
        )}
      </div>
    </MyContext.Provider>
  );
}

export default App;
