import React from "react";
import TodoList from "./components/Todo/TodoList";
import "./App.scss";

function App() {
  const [todoData, setTodoData] = React.useState([
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: true, title: "Buy milk" },
    { id: 3, completed: false, title: "Buy cake" },
  ]);
  function toggleTodo(id) {
    setTodoData(
      todoData.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  return (
    <div className="App">
      <TodoList todoData={todoData} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
