function TasksCount({ tasks, deletedCount }) {

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (

<div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">

<h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 text-center mb-6">
Tasks Count
</h2>

<div className="space-y-3 text-gray-700">

<p className="flex justify-between border-b pb-2">
<span>Total Tasks</span>
<span className="font-semibold">{totalTasks}</span>
</p>

<p className="flex justify-between border-b pb-2">
<span>Completed</span>
<span className="font-semibold text-green-600">{completedTasks}</span>
</p>

<p className="flex justify-between border-b pb-2">
<span>Pending</span>
<span className="font-semibold text-yellow-600">{pendingTasks}</span>
</p>

{/* Optional */}

{/* <p className="flex justify-between">
<span>Deleted</span>
<span className="font-semibold text-red-500">{deletedCount}</span>
</p> */}

</div>

</div>

  )
}

export default TasksCount