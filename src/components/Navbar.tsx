import logo from '../assets/tapps.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <div className="nav-tabs">
            <Link to='ref'>
                <img src={logo} alt="logo" />
                <span>
                    Refs
                </span>
            </Link>
        </div>
        <div className="nav-tabs">
            <Link to='task'>
                <img src={logo} alt="logo" />
                <span>
                    Task
                </span>
            </Link>
        </div>
        <div className="nav-tabs">
            <Link to='boost'>
                <img src={logo} alt="logo" />
                <span>
                    Boost
                </span>
            </Link>
        </div>
        <div className="nav-tabs">
            <Link to='/stormcoin'>
                <img src={logo} alt="logo" />
                <span>
                    Home
                </span>
            </Link>
        </div>
    </nav>
  )
}
