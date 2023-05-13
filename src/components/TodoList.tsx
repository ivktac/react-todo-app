import { useTodos } from "../context/TodosContext";
import { cls } from "../utils";
import styles from "./TodoList.module.css";

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

export default function TodoList() {
  const { state, toggleTodo, deleteTodo } = useTodos();

  return (
    <ul className="todos" aria-label="todos" role="list">
      {state.todos.map((todo) => {
        const completedTodoStyle = todo.completed ? "line-through" : "none";

        return (
          <li key={todo.id} className={styles.todo}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo?.(todo.id)}
            />
            <span
              style={{
                color: getColor(todo.priority),
                textDecoration: completedTodoStyle,
              }}
            >
              {todo.name}
            </span>
            <div className={styles.buttonGrid}>
              <button
                className={cls(styles.actionButton, styles.deleteButton)}
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
