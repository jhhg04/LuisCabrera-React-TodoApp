import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h1 className="text-end">TodoList</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default TodoList;
