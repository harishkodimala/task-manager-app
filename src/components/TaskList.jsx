function TaskList({ tasks, deleteTask, toggleCompleted }) {
  return (
    <div className="bg-gray-500 border-2 rounded-2xl w-80 h-auto min-h-80 p-10 text-center">
      <h1>Task List</h1>
      {tasks.map((task, index) => (
        <div key={index} className="border p-3 m-2 rounded">

          <h3 className={task.completed ? "line-through text-red-400" : ""}>
            {task.taskName}
          </h3>

          <p>Priority: {task.priority}</p>

          <button
            onClick={() => toggleCompleted(index)}
            className="bg-green-500 text-white px-3 py-1 rounded m-1"
          >
            {task.completed ? "Undo" : "Completed"}
          </button>

          <button
            onClick={() => deleteTask(index)}
            className="bg-red-500 text-white px-3 py-1 rounded m-1"
          >
            Delete
          </button>

        </div>
      ))}
    </div>
  )
}

export default TaskList