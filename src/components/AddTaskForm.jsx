import { useForm } from "react-hook-form";

function AddTaskForm({ addNewTask }) {

  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (taskObj) => {
    const newTask = {
      ...taskObj,
      completed: false,
    };

    addNewTask(newTask);
    reset();
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">

      <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 text-center mb-6">
        Add New Task
      </h2>

      <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col gap-4">

        {/* Task Input */}
        <input
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="text"
          placeholder="Add New Task"
          {...register("taskName", { required: true, minLength: 3 })}
        />

        {errors.taskName?.type === "required" && (
          <p className="text-red-500 text-sm">Task name is required</p>
        )}

        {errors.taskName?.type === "minLength" && (
          <p className="text-red-500 text-sm">Minimum length should be 3</p>
        )}

        {/* Priority */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">

          <label htmlFor="priority" className="text-gray-600">
            Select Priority
          </label>

          <select
            className="border rounded-lg p-2 w-full sm:w-auto focus:ring-2 focus:ring-indigo-400"
            {...register("priority")}
          >
            <option value="low">LOW</option>
            <option value="medium">MEDIUM</option>
            <option value="high">HIGH</option>
          </select>

        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg transition"
        >
          Add Task
        </button>

      </form>

    </div>
  );
}

export default AddTaskForm;