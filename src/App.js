import React, { useState, useEffect, lazy, Suspense } from "react";
import TodoList from "./Todo/TodoList";
import context from "./context";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

const Form = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./Todo/Form"));
      }, 1000);
    })
);

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodoOption, setSelectedTodoOption] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  //     .then((response) => response.json())
  //     .then((todos) => setTodos(todos));
  // }, []);

  useEffect(() => {
    loadLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  useEffect(() => {
    function selectedTodosHandler() {
      switch (selectedTodoOption) {
        case "completed":
          setFilteredTodos(todos.filter((el) => el.completed === true));

          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((el) => el.completed === false));

          break;

        default:
          setFilteredTodos(todos);
          break;
      }
    }

    selectedTodosHandler();
  }, [todos, selectedTodoOption]);

  function toggleTodo(id) {
    setTodos(
      todos.map((el) => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((el) => el.id !== id));
  }

  function addTodo(newTitle) {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        completed: false,
        title: newTitle,
      },
    ]);
  }

  function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function loadLocalTodos() {
    if (localStorage.getItem("todos") === null) {
      setTodos([]);
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
    setLoading(false);
  }

  return (
    <context.Provider value={{ removeTodo, toggleTodo }}>
      <div className="App">
        <Modal />
        <Suspense fallback={<Loader />}>
          <Form
            addTodo={addTodo}
            setSelectedTodoOption={setSelectedTodoOption}
          />
        </Suspense>
        {todos.length ? (
          <TodoList filteredTodos={filteredTodos} />
        ) : loading ? (
          <Loader />
        ) : (
          <div>No todos</div>
        )}
      </div>
    </context.Provider>
  );
}

export default App;
