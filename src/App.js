import React, { useEffect } from "react";
import TodoList from "./components/Todo/TodoList";
import "./App.scss";
import Context from "./context";
import AddTodo from "./components/Todo/AddTodo";

function App() {
  const [todoData, setTodoData] = React.useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todoData) => {
        setTodoData(todoData);
      });
  }, []);

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

  function removeTodo(id) {
    setTodoData(todoData.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodoData(
      todoData.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <AddTodo onCreate={addTodo} />
        {todoData.length ? (
          <TodoList todoData={todoData} onToggle={toggleTodo} />
        ) : (
          <div>No Todos Yet!</div>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
