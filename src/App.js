import React, { useEffect, useState } from "react";
import Context from "./context";
import Loader from "./Loader";
import AddTodo from "./Todo/AddTodo";
import TodoList from "./Todo/TodoList";

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

  return (
    <Context.Provider>
      <div className="App">
        <AddTodo todos={todos} setTodos={setTodos} />
        {todos.length ? (
          <TodoList todos={todos} setTodos={setTodos} />
        ) : loading ? (
          <Loader />
        ) : (
          <p>No Todos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
