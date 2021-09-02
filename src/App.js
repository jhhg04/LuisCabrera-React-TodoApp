import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo #1",
    description: "Desc del todo #1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo #2",
    description: "Desc del todo #2",
    completed: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList todos={todos} />
        </div>
        <div className="col-4">
          <TodoForm />
        </div>
      </div>
    </div>
  );
};

export default App;
