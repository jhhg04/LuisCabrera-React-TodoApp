const TodoList = () => {
  return (
    <div>
      <h1>TodoList</h1>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Titulo de la tarea</h3>
          <p className="card-text">Descripcion de la tarea</p>
          <hr />
          <button className="btn btn-sm btn-primary me-2">Editar</button>
          <button className="btn btn-sm btn-danger">Eliminar</button>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
