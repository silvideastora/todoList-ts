import { useState } from 'react';
import { Task } from './interfaces/Task'
import logo from './logo.svg'
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';


function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id:1,
      title:"Learn React",
      description:"Learn React",
      completed: false
    }
  ])
  //Funcion para crear ID unicos para cada tarea
  const getCurrentTime = (): number => new Date().getTime();
//Funcion para agregar tareas
  const addTask = (task: Task) =>  
  setTasks([
    ...tasks, 
    {...task, id: getCurrentTime(),completed:false}])
//Funcion para borrar tareas
  const deleteTask = (id:number) => setTasks(tasks.filter(task => task.id !== id))
  return (
    <div className="bg-dark text-light">
      {/* NavBar */ }
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className='container'>
          <a href="/" className='navbar-brand'>
            <img src={logo} alt="react logo" style={{width:'4rem'}}/>
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
        <div className="col-md-4" >
          <TaskForm addTask={addTask}/>
        </div>
        <div className="col-md-8">
          <div className="row">
            <TaskList tasks={tasks} deleteTask={deleteTask}/>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
