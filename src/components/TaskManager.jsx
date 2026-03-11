import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TasksCount from "./TasksCount";

function TaskManager() {

  let [tasks, setTasks] = useState([]);
  let [deletedCount, setDeletedCount] = useState(0);

  const addNewTask = (taskObj) => {
    setTasks([...tasks, taskObj]);
  };

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(updatedTasks);
    setDeletedCount((prev) => prev + 1);
  };

  const toggleCompleted = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
  };

  return (

<div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 px-4 sm:px-8 py-10">

<div className="max-w-6xl mx-auto">

{/* Title */}

<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-10">
Task Manager Application
</h1>


{/* Top Cards */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

<div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300">

<AddTaskForm addNewTask={addNewTask} />

</div>


<div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300">

<TasksCount tasks={tasks} deletedCount={deletedCount} />

</div>

</div>


{/* Task List */}

<div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300">

<TaskList
tasks={tasks}
deleteTask={deleteTask}
toggleCompleted={toggleCompleted}
/>

</div>

</div>

</div>

  );
}

export default TaskManager;