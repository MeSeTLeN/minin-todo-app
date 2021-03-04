import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todo = [
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: true, title: "Buy milk" },
    { id: 3, completed: false, title: "Buy eggss" },
  ];
  return (
    <div className="App">
      <h1>React Tutorial</h1>
      <TodoList todos={todo} />
    </div>
  );
}

export default App;
