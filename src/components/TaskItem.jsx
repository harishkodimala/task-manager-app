import React from "react";

function TaskItem({ taskObj, deleteTask, index }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 border rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition">

      {/* Task info */}
      <div>
        <p className="font-medium text-gray-800">
          {taskObj.taskName}
        </p>

        <p className="text-sm text-gray-500">
          Priority: {taskObj.priority}
        </p>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => deleteTask(index)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm transition"
      >
        Delete
      </button>

    </div>
  );
}

export default TaskItem;