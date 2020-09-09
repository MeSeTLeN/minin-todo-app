import React, { useState, useEffect, lazy, Suspense } from "react";
import TodoList from "./Todo/TodoList";
import context from "./context";
import Modal from "./Todo/Modal/Modal";
import Loader from "./Loader/Loader";

const AddTodo = lazy(() => import("./Todo/AddTodo"));

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    //   .then((response) => response.json())
    //   .then((todos) => {
    //     setTodos(todos);
    //     setLoading(false);
    //   });
    // setTodos([]);
    setLoading(false);
    getLocalTodos();
  }, []);

  useEffect(() => {
    function selectedTodos() {
      switch (selectedStatus) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncomleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;

        default:
          setFilteredTodos(todos);
          break;
      }
    }
    selectedTodos();
    saveLocalTodos();
  }, [todos, selectedStatus]);

  function completeTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        completed: false,
        title,
      },
    ]);
  }

  function selectTodoHandler(e) {
    setSelectedStatus(e.target.value);
  }

  function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getLocalTodos() {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", setTodos([]));
    } else {
      localStorage.getItem(setTodos(JSON.parse(localStorage.getItem("todos"))));
    }
  }

  return (
    <context.Provider value={{ completeTodo, removeTodo, selectTodoHandler }}>
      <div className="App">
        <Modal />
        <Suspense fallback={<Loader />}>
          <AddTodo addTodo={addTodo} />
        </Suspense>
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} filteredTodos={filteredTodos} />
        ) : loading ? null : (
          <div
            style={{ display: "flex", justifyContent: "center", color: "#fff" }}
          >
            No todos Yet
          </div>
        )}
      </div>
    </context.Provider>
  );
}

export default App;
