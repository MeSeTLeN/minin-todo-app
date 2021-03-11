import React, { useState } from "react";
import TodoList from "./Components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, completed: false, title: "buy bread" },
    { id: 1, completed: true, title: "buy milk" },
    { id: 1, completed: false, title: "buy eggs" },
  ]);
  
  return (
    <div className="wrapper">
      <TodoList todos={todoList} />{" "}
    </div>
  );
}

export default App;
