import logo from '../assets/tapps.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <div className="nav-bar">
            <NavLink className='nav-tabs' to='ref'>
                <img src={logo} alt="logo" />
                <span>
                    Refs
                </span>
            </NavLink>
            <NavLink className='nav-tabs' to='task'>
                <img src={logo} alt="logo" />
                <span>
                    Task
                </span>
            </NavLink>
              
            <NavLink className='nav-tabs' to='boost'>
                <img src={logo} alt="logo" />
                <span>
                    Boost
                </span>
            </NavLink>
              
            <NavLink className='nav-tabs' to='/stormcoin'>
                <img src={logo} alt="logo" />
                <span>
                    Home
                </span>
            </NavLink>
               </div>
    </nav>
  )
}
