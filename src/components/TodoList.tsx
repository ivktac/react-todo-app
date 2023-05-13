import { Todo } from "../types";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const getColor = (priority: number): string => {
  switch (priority) {
    case 1:
      return "green";
    case 2:
      return "orange";
    case 3:
      return "red";
    default:
      return "black";
  }
};

export default function TodoList({ todos, toggleTodo }: TodoListProps) {
  return (
    <ul className="todos" aria-label="todos" role="list">
      {todos.map((todo) => {
        const completedTodoStyle = todo.completed ? "line-through" : "none";

        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                color: getColor(todo.priority),
                textDecoration: completedTodoStyle,
              }}
            >
              {todo.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
