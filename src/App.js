import React, { lazy, useEffect, useState, Suspense } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Loader from "./Loader";

const AddTodo = lazy(() => import("./Todo/AddTodo"));

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todoList) =>
        setTimeout(() => {
          setTodoList(todoList);
          setLoading(false);
        }, 2000)
      );
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
        <Suspense fallback={<Loader />}>
          <AddTodo onCreateMethod={addTodoFunc} />
        </Suspense>

        {loading && <Loader />}
        {todoList.length ? (
          <TodoList
            todos={todoList}
            onChangeCompletedTodoListMethod={onChangeCompletedAppMethod}
          />
        ) : loading ? null : (
          <p>No Todos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
