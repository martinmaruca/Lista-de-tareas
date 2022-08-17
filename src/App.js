import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import Todoform from "./components/TodoForm";
import "./App.css";

const initialTodos = [

  <div className="alert alert-primary">
    No hay tareas para mostrar. pore favor agregue una nueva tarea {":)"}.
  </div>
];

const localtodos = JSON.parse(localStorage.getItem("todos"));

const App = () => {
  const [todos, setTodos] = useState(localtodos || initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoDelete = (todoId) => {

    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }
    const changedTodos = todos.filter(todo => todo.id !== todoId);

    setTodos(changedTodos);

  }

  const todoTogleCompleted = (todoId) => {

    const changedTodos = todos.map(todo => (
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ))

    setTodos(changedTodos);
  }

  const todoAdd = (todo) => {

    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };
    const changedTodos = [
      newTodo,
      ...todos,
    ];

    setTodos(changedTodos);
  }

  const todoUpdate = (todoEdit) => {

    const changedTodos = todos.map(todo => (
      todo.id === todoEdit.id ? todoEdit : todo
    ))
    setTodos(changedTodos);
  }

  return (
    <div className="container" >
      <div className="row d-flex ">
        <div>
          <div className="col-12">
            <TodoList
              todos={todos}
              todoDelete={todoDelete}
              todoTogleCompleted={todoTogleCompleted}
              setTodoEdit={setTodoEdit}
            />
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center mt-5 mb-5 formulario">
          <Todoform
            todoAdd={todoAdd}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
            todoEdit={todoEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
