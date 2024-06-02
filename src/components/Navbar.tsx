
import { NavLink } from 'react-router-dom'
import { FaTasks } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav>
        <div className="nav-bar">
            <NavLink className='nav-tabs' to='stormcoin'>
            <IoHome />
                <span>
                    Home
                </span>
            </NavLink>
            <NavLink className='nav-tabs' to='task'>
                <FaTasks />
                <span>
                    Task
                </span>
            </NavLink>
              
            <NavLink className='nav-tabs' to='boost'>
                <BsRocketTakeoffFill />
                <span>
                    Boost
                </span>
            </NavLink>
              
            <NavLink className='nav-tabs' to='/ref'>
                <IoPeople />
                <span>
                    Refs
                </span>
            </NavLink>
               </div>
    </nav>
  )
}
