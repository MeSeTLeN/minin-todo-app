import React, { useState, lazy, Suspense, useEffect } from "react";
import TodoList from "./Todo/TodoList";
import context from "./context";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";

const AddTodo = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./Todo/AddTodo"));
      }, 2000);
    })
);

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((response) => response.json())
        .then((todos) => setTodos(todos));
    }, 2000);
  }, []);

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

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <context.Provider value={{ removeTodo, toggleTodo }}>
      <div className="App" style={{ color: "#fff" }}>
        <Modal />

        <Suspense fallback={<Loader />}>
          <AddTodo onCreate={addTodo} />
        </Suspense>

        {todos.length ? (
          <TodoList todos={todos} />
        ) : loading ? (
          <Loader />
        ) : (
          <h2>No todo Yet</h2>
        )}
      </div>
    </context.Provider>
  );
}

export default App;
