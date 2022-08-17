import React from "react";

const Todo = ({ todo, todoDelete, todoTogleCompleted, setTodoEdit }) => {
  return (
    <div className="card col-12 col-md-6 col-lg-3 mt-5 me-1 ">
      <div className="card-body">
        <h3 className="card-title text-end">
          {todo.title}
          <button
            onClick={() => todoTogleCompleted(todo.id)}
            className={`btn btn-sm ${
              todo.completed ? "btn__terminado" : "btn__terminar"
            } ms-2`}
          >
            {todo.completed ? "Terminado" : "Terminar"}
          </button>
        </h3>
        <p className="card-text ">
          <strong>Dia:</strong> {todo.date}
        </p>
        <p className="card-text ">
          <strong>Hora:</strong> {todo.hour}
        </p>
        <p className="card-text ">
          <strong>Tarea:</strong> {todo.description}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            onClick={() => setTodoEdit(todo)}
            className="btn btn-sm btn-outline-info me-2"
          >
            Editar
          </button>
          <button
            onClick={() => todoDelete(todo.id)}
            className="btn btn-sm btn-outline-danger"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
