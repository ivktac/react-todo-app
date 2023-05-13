import { createContext, useContext } from "react";
import { Todo } from "../types";

type TodosContextType = {
  state: { todos: Todo[] };
  addTodo: (name: string, priority: number) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TodosContextType | null>(null!);

export function useTodos() {
  const context = useContext(TodosContext);

  if (context === undefined) {
    throw new Error("useTodos must be used within a TodosProvider");
  }

  return { ...context };
}
