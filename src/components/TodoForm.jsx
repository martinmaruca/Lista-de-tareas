import React, { useState, useEffect } from "react";

const initialFormValues = {
  title: "",
  date: "",
  hour: "",
  description: "",
};

const Todoform = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description, date, hour } = formValues;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [todoEdit]);

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };

    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === ""
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (todoEdit) {
      todoUpdate(formValues);
      setSuccessMessage("Tarea actualizada correctamente");
    } else {
      todoAdd(formValues);
      setSuccessMessage("Tarea agregada correctamente");
    }

    setFormValues(initialFormValues);

    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);
    setError(null);
  };

  return (
    <div className="col-12 col-md-6 ">
      <h2 className="text-center display-6 mt-4 mb-4 tareas__nueva">
        {todoEdit ? "Editar Tarea" : "Nueva Tarea"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column aling-items-center"
      >
        <input
          type="text"
          placeholder="Titulo"
          className="form-control mb-2"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="date"
          placeholder="Fecha"
          className="form-control mb-2"
          value={date}
          name="date"
          onChange={handleInputChange}
        />
        <input
          type="time"
          placeholder="Hora"
          className="form-control"
          value={hour}
          name="hour"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Descripción"
          className="form-conrol mt-2 w-100"
          value={description}
          name="description"
          onChange={handleInputChange}
        ></textarea>
        <div>
          <button
            /* onClick={() => setTodoEdit(null)} */
            className="mt-3 me-2 btn-block boton"
          >
            {todoEdit ? "Actualizar Tarea" : "Agregar Tarea"}
          </button>
          {todoEdit && (
            <button
              onClick={() => setTodoEdit(null)}
              className="btn btn-sn boton mt-2 "
            >
              Cancelar Edición
            </button>
          )}
        </div>
      </form>
      {error && <div className="campos mb-4 mt-2">{error}</div>}
      {successMessage && (
        <div className="alert alert-success mt-2">{successMessage}</div>
      )}
    </div>
  );
};

export default Todoform;
