import React from "react";
import "./App.css";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "Im ur first task" },
    { id: 2, completed: false, title: "Im ur 2 task" },
    { id: 3, completed: false, title: "Im ur 3 task" },
  ];
  return (
    <div className="App">
      <h1>React project</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
