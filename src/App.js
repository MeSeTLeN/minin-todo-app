import React from "react";
import TodoList from "./components/Todo/TodoList";

function App() {
  const todoData = [
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: false, title: "Buy milk" },
    { id: 3, completed: false, title: "Buy cake" },
  ];
  return (
    <div className="App">
      <TodoList />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
