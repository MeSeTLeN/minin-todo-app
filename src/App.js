import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const [todoList, setTodoList] = React.useState([
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: true, title: "Buy milk" },
    { id: 3, completed: false, title: "Buy eggss" },
  ]);

  function onChangeCompletedAppMethod(id, completed) {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
    console.log("todo id", id, completed);
  }

  return (
    <div className="wrapper">
      <h1>React Tutorial</h1>
      <TodoList
        todos={todoList}
        onChangeCompletedTodoListMethod={onChangeCompletedAppMethod}
      />
    </div>
  );
}

export default App;
