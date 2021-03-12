import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import Context from "./context";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, completed: false, title: "buy bread" },
    { id: 2, completed: true, title: "buy milk" },
    { id: 3, completed: false, title: "buy eggs" },
  ]);

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

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className="wrapper">
        <TodoList
          todos={todoList}
          changeCompletedMethodList={changeCompletedFunc}
        />
      </div>
    </Context.Provider>
  );
}

export default App;
