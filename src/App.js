import React, { useEffect, useState } from "react";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
  }, []);

  return (
    <Context.Provider>
      <div className="App">
        <AddTodo todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </Context.Provider>
  );
}

export default App;
