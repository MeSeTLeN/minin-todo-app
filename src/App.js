import React, { useState } from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: "Shower" },
    { id: 2, completed: true, title: "Coffee" },
    { id: 3, completed: false, title: "Work" },
  ]);

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
    <div className="App">
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
