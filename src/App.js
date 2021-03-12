import React, { useState } from "react";
import TodoList from "./Components/TodoList";

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

  return (
    <div className="wrapper">
      <TodoList
        todos={todoList}
        changeCompletedMethodList={changeCompletedFunc}
      />
    </div>
  );
}

export default App;
