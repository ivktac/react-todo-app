import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodosProvider from "./providers/TodosProvider";

function App() {
  return (
    <section className="container">
      <h1>Today is {new Date().toLocaleDateString()}</h1>
      <TodosProvider>
        <TodoForm />
        <TodoList />
      </TodosProvider>
    </section>
  );
}

export default App;
