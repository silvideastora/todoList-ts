import {AiOutlinePlus} from 'react-icons/ai';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from '../interfaces/Task'

interface Props {
  addTask:(task:Task) =>  void
}
type HandleChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
const initialState = {
  title:'',
  description:''
}
export default function TaskForm({addTask}: Props) {
  const [task, setTask] = useState(initialState)
  const handleChange = ({
    target: {name, value}
  }: HandleChange) => {
    setTask({...task, [name]:value})
  }
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTask(task)
    setTask(initialState)
  }
  return (
    <div className="card card-body border-primary text-white">
      <h1>Add Task</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Write a title"
          name="title"
          onChange={handleChange}
          value={task.title}
          className="form-control mb-3 rounded-0 border-0"
        />
        <textarea 
          name="description" 
          rows={2} 
          placeholder="Write a description"
          onChange={handleChange}
          value={task.description}
          className="form-control mb-3 rounded-0 border-0">
        </textarea>
        <button type="submit" className="btn btn-primary">Save <AiOutlinePlus/></button>
      </form>
    </div>
  )
}
