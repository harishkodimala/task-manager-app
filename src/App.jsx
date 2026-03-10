import React from 'react'
import TaskManager from './components/TaskManager'

function App() {
return ( <div className="min-h-screen bg-linear-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center p-6">
  <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl p-8 border border-gray-200">
    <TaskManager/>
  </div>

</div>

)
}

export default App
