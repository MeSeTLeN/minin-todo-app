import React from "react";
import TodoList from "./components/Todo/TodoList";
import './App.scss'

function App() {
  const [todoData, setTodoData] = React.useState([
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: false, title: "Buy milk" },
    { id: 3, completed: false, title: "Buy cake" },
  ]);
  function toggleTodo (id){
    setTodoData(todoData.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo
    }))
  }
  return (
    <div className="App">
      <TodoList todoData={todoData} onToggle={toggleTodo} />
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
