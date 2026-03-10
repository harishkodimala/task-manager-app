import React from 'react'

function TaskItem({ taskObj, deleteTask, index }) {
  return (
    <div className="flex justify-between mb-2">

      <p>
        {taskObj.taskName} - {taskObj.priority}
      </p>

      <button
        onClick={() => deleteTask(index)}
        className="bg-red-500 text-white px-2 rounded"
      >
        Delete
      </button>

    </div>
  )
}

export default TaskItem