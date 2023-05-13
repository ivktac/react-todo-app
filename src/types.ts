export type Todo = {
  id: number;
  name: string;
  completed: boolean;
  priority: number;
};

export type TodosContextType = {
  state: { todos: Todo[] };
  addTodo: (name: string, priority: number) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  deleteAllTodos: () => void;
};
