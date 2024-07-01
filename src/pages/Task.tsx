import { useState } from "react"
import TaskItem from "./tasks/TaskItem"


export default function Task() {
  const [tasks, setTasks] = useState([{id:1},{id:2}])
 // const [loading, setLoading] = useState(false)
   const handlefetch = () =>{
    setTasks([])
   }
  return (
    <>
     <h2>
       Tasks available
     </h2>
     <div className="task-wrapper">
      {tasks.map(task => (
        <TaskItem key={task?.id} title='' reward={1000} link=''/>
      ))}
     <button
     onClick={handlefetch}
     >

     </button>
     </div>
    </>
   
  )
}
