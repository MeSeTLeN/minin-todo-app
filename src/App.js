import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "Shower" },
    { id: 2, completed: true, title: "Coffee" },
    { id: 3, completed: false, title: "Work" },
  ];
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
