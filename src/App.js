import React, { lazy, Suspense, useEffect, useState } from "react";
import MyContext from "./context";
import Loader from "./Loader";
import Modal from "./Modal/Modal";
import TodoList from "./Todo/TodoList";

const AddTodo = lazy(() => import("./Todo/AddTodo"));

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
        setLoading(false);
      });
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
        <Suspense fallback={<Loader />}>
          <AddTodo onCreateTodo={addTodo} />
        </Suspense>
        <Modal />
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggleTodo={todoCompleted} />
        ) : loading ? null : (
          <p>No todos</p>
        )}
      </div>
    </MyContext.Provider>
  );
}

export default App;
