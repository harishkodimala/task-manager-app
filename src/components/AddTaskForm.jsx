import { useForm } from "react-hook-form"

function AddTaskForm({ addNewTask }) {

  const { handleSubmit, register, reset,setError,
    formState: { errors }, } = useForm()
    const onSubmitForm = (taskObj) => {

  const newTask = {
    ...taskObj,
    completed: false
  }

  addNewTask(newTask) 
  reset()
}
 


  return (
    <div className="border-2 rounded-3xl bg-cyan-400 p-10 text-center max-h-80">
      <h1 className="text-shadow-black pb-5 text-2xl">Add New Task</h1>

      <form onSubmit={handleSubmit(onSubmitForm)}>

        <input className="border-2 p-2 "
          type="text"
          {...register("taskName", {required:true,minLength:3})}
          placeholder="Add New Task"
        />
        {errors.taskName?.type === "required" && <p className="text-red-500">Task name is required</p>}
        {errors.taskName?.type === "minLength" && <p className="text-red-500">Min length shd be 3</p>}
        <br /><br />

        <label htmlFor="priority" className="pr-2">Select Priority</label>

        <select className="border-2" {...register("priority")}>
          <option value="low">LOW</option>
          <option value="medium">MEDIUM</option>
          <option value="high">HIGH</option>
        </select>

        <br /><br />

        <button type="submit" className="border-2 p-2 m-1 bg-pink-500 rounded-3xl w-40">Add</button>

      </form>
    </div>
  )
}

export default AddTaskForm