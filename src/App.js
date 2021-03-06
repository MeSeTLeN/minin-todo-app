import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todoList, setTodoList] = React.useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todoList) => setTodoList(todoList));
  }, []);

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

  function removeTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function addTodoFunc(title) {
    setTodoList(
      todoList.concat([
        {
          title,
          id: Date.now,
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className="wrapper">
        <h1>React Tutorial</h1>
        <AddTodo onCreateMethod={addTodoFunc} />
        {todoList.length ? (
          <TodoList
            todos={todoList}
            onChangeCompletedTodoListMethod={onChangeCompletedAppMethod}
          />
        ) : (
          <p>No Todos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
