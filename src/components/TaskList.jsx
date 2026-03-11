function TaskList({ tasks, deleteTask, toggleCompleted }) {
  return (

<div>

<h2 className="text-2xl font-semibold text-indigo-600 mb-6 text-center">
Task List
</h2>

{tasks.length === 0 && (
<p className="text-gray-500 text-center">
No tasks added yet
</p>
)}

<div className="space-y-4">

{tasks.map((task, index) => (

<div
key={index}
className="bg-gray-50 border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm hover:shadow-md transition"
>

<div>

<h3 className={`font-medium text-lg ${task.completed ? "line-through text-red-400" : ""}`}>
{task.taskName}
</h3>

<p className="text-sm text-gray-500">
Priority: {task.priority}
</p>

</div>

<div className="flex gap-2">

<button
onClick={() => toggleCompleted(index)}
className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm transition"
>

{task.completed ? "Undo" : "Complete"}

</button>

<button
onClick={() => deleteTask(index)}
className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition"
>

Delete

</button>

</div>

</div>

))}

</div>

</div>

  );
}

export default TaskList;