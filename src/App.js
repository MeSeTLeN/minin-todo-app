import React, { useState, useEffect, lazy, Suspense, Fragment } from "react";
import TodoList from "./Todo/TodoList";
import context from "./context";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

// here goes lazy loading component check out chrome devTool
// promise setTimeout simulate internet speed
const AddTodo = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./Todo/AddTodo"));
      }, 3000);
    })
);

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect setTimeout simulate data loading from server
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((response) => response.json())
        .then((todos) => {
          setTodos(todos);
          setLoading(false);
        });
    }, 2000);
  }, []);

  // TodoItem input checkbox done(true) or no(false)
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

  // TodoItem remove btn
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // AddTodo btn
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
    // context.Provider help avoid using too many props
    <context.Provider value={{ removeTodo }}>
      <div className="App">
        <h1>Todo App</h1>

        <Modal />

        {/* Suspense for lazy loading */}
        <Suspense
          fallback={
            <Fragment>
              <Loader />

              <div style={{ display: "flex", justifyContent: "center" }}>
                Lazy loading(timeout 3s) component AddTodo...
              </div>
            </Fragment>
          }
        >
          <AddTodo onCreate={addTodo} />
        </Suspense>

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? (
          <Fragment>
            <Loader />
            <div style={{ display: "flex", justifyContent: "center" }}>
              Loading data from server...
            </div>
          </Fragment>
        ) : (
          <div className="noTodo">"No todo Yet!"</div>
        )}
      </div>
    </context.Provider>
  );
}

export default App;
