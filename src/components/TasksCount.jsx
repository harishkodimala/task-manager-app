function TasksCount({ tasks, deletedCount }) {

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const pendingTasks = totalTasks - completedTasks

  return (
    <div className="border-2 rounded-2xl bg-orange-300 w-70 h-auto text-center p-6 max-h-60">
      <h3 className="text-2xl pb-5">Tasks Count</h3>

      <p className="p-2">Total Tasks: {totalTasks}</p>
      <p className="p-2">Completed: {completedTasks}</p>
      <p className="p-2">Pending: {pendingTasks}</p>
      {/* <p className="p-2">Deleted: {deletedCount}</p> */}
    </div>
  )
}

export default TasksCount