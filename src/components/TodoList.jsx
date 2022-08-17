import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoTogleCompleted, setTodoEdit }) => {
  return (
    <>
      <div>
        <h2 className="text-right display-3 tareas">Lista de Tareas</h2>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly ">
        {todos.length === 0 ? (
          <div className="mt-5 mb-2 sin__tareas">
            No hay tareas para mostrar. por favor agregue una nueva tarea {":)"}
            .
          </div>
        ) : (
          todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              todoDelete={todoDelete}
              todoTogleCompleted={todoTogleCompleted}
              setTodoEdit={setTodoEdit}
            />
          ))
        )}
      </div>
    </>
  );
};

export default TodoList;
