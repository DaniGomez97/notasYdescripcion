import TaskList from "./Componentes/TaskList";
import TaskForm from "./Componentes/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 min-h-screen"> 
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
