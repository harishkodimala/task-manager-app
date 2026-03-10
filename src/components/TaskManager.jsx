import { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskList from './TaskList'
import TasksCount from './TasksCount'

function TaskManager() {

let [tasks,setTasks]=useState([])
let [deletedCount, setDeletedCount] = useState(0)

const addNewTask=(taskObj)=>
 {
  setTasks([...tasks,taskObj])
 }

const deleteTask = (taskIndex) => {
  const updatedTasks = tasks.filter((task, index) => index !== taskIndex)
  setTasks(updatedTasks)
  setDeletedCount(prev => prev + 1)
}

const toggleCompleted = (taskIndex) => {
  const updatedTasks = tasks.map((task, index) =>
    index === taskIndex
      ? { ...task, completed: !task.completed }
      : task
  )

  setTasks(updatedTasks)
}

return ( <div className="flex flex-col items-center gap-8 p-8">

  <h1 className="text-4xl font-bold text-gray-800 bg-indigo-100 px-6 py-3 rounded-xl shadow">
    Task Manager Application
  </h1>

  <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">

    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <AddTaskForm addNewTask={addNewTask}/>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <TasksCount tasks={tasks} deletedCount={deletedCount}/>
    </div>

  </div>

  <div className="w-full max-w-5xl bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
    <TaskList 
      tasks={tasks} 
      deleteTask={deleteTask} 
      toggleCompleted={toggleCompleted} 
    />
  </div>

</div>

)
}

export default TaskManager
