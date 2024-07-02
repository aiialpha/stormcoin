import React, { useState } from "react";
import useCountContext from "../../UseContext";

//import { IoHome } from "react-icons/io5";
import {toast } from "react-toastify"

interface TaskProps{
title: string | null,
reward:number ,
link:null | string

}

const TaskItem: React.FC<TaskProps> = ({title, reward,link})=> {
    const { setCount} = useCountContext();
    const [click, setClick]= useState(false)
    const handleTask = ()=>{
        setClick(true)
        setTimeout(()=>{
            setCount( p => p + reward)
            setClick(false)
            toast(`Collected ${reward} successfully`, {
              autoClose: 300,
              position: "top-center",
              closeOnClick: true
            })
        }, 3000)
    }
  return (
    <>
     <div className="task-item">
        {/* <i className="task-img">
        <IoHome />
        </i> */}
        <div className="descrip">
        <p>{title ? title : 'Join our Channel'}</p>
        <span className="reward">{reward ? reward : '1000'}</span>
        </div>
        <button
        className="tsak-btn"
        style={{display:'hidden'}}
        onClick={handleTask}>
           {link ? link : (click ? <div style={{height:'1rem', width: "1rem"}} className="spinner-border"></div> : 'Start')}
        </button>
      </div>
    </>
  )
}
export default TaskItem;