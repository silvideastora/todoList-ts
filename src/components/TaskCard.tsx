import {Task} from '../interfaces/Task';
interface Props {
  task: Task;
  deleteTask: (id:number) => void
}

export default function TaskCard({task, deleteTask}: Props) {
  return (
    <div className="card card-body card border-light mb-3">
      <h2>{task.title}</h2> 
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button 
      onClick={ ()=> task.id && deleteTask(task.id)}
      className="btn btn-outline-secondary">Delete</button>
    </div>
  )
}
