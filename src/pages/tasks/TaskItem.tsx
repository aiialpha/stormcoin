import React, { useState } from "react";
import useCountContext from "../../UseContext";

import { IoHome } from "react-icons/io5";

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
        }, 2000)
    }
  return (
    <>
     <div className="task-item">
        <i className="task-img">
        <IoHome />
        </i>
        <div className="descrip">
        <h4>{title ? title : 'Join our Channel'}</h4>
        <span className="reward">{reward ? reward : '1000'}</span>
        </div>
        <button
        onClick={handleTask}>
          {link ? link : `${click ? '...': 'Start'}`}
        </button>
      </div>
    </>
  )
}
export default TaskItem;