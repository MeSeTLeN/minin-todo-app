import React, { useEffect, useState } from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import Context from "./context";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todoList) => setTodoList(todoList));
  }, []);

  function changeCompletedFunc(id) {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function addTodoFunc(title) {
    setTodoList(
      todoList.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className="wrapper">
        <AddTodo onCreateMethod={addTodoFunc} />
        {todoList.length ? (
          <TodoList
            todos={todoList}
            changeCompletedMethodList={changeCompletedFunc}
          />
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
