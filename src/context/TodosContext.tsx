import { createContext, useContext } from "react";
import { TodosContextType } from "../types";

export const TodosContext = createContext<TodosContextType>(null!);

export function useTodos() {
  const context = useContext(TodosContext);

  if (context === undefined) {
    throw new Error("useTodos must be used within a TodosProvider");
  }

  return { ...context };
}
