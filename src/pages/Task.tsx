import TaskItem from "./tasks/TaskItem"


export default function Task() {
  return (
    <>
     <h2>
       Tasks available
     </h2>
     <div className="task-wrapper">
      <TaskItem title='' reward={1000} link='' />
      <TaskItem title='' reward={2000} link='' />
      <TaskItem title='' reward={1000} link='' />
      <TaskItem title='' reward={1500} link='' />
      <TaskItem title='' reward={500} link='' />
      <TaskItem title='' reward={2500} link='' />
      <TaskItem title='' reward={100} link='' />
      <TaskItem title='' reward={2000} link='' />
      <TaskItem title='' reward={1000} link='' />
     </div>
    </>
   
  )
}
