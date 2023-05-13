import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./types";

const initialState: Todo[] = localStorage.todos
  ? JSON.parse(localStorage.todos)
  : [
    {
      id: 1,
      name: "Todo 1",
      completed: false,
      priority: 1,
    },
    {
      id: 2,
      name: "Todo 2",
      completed: false,
      priority: 2,
    },
  ];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialState);

  useEffect(() => {
    localStorage.todos = JSON.stringify(todos);
  }, [todos]);

  const addTodo = (name: string, priority: number) => {
    const isExistingTodo = todos.some((todo) =>
      todo.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistingTodo) {
      alert(`Todo "${name}" already exists`);
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      name: name,
      completed: false,
      priority,
    };

    setTodos((previousTodos) => [...previousTodos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <section className="container">
      <h1>Today is {new Date().toLocaleDateString()}</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </section>
  );
}

export default App;
