
import { Link } from 'react-router-dom';
import twaLogo from '../assets/tapps.png'
import  useCountContext  from '../UseContext';


// import WebApp from "@twa-dev/sdk";

export default function  Home(){
    const {count, setCount} = useCountContext();
    const handleTouchStart = () => {
      setCount(count => count+10000);
    };
   
  return (
    <>
    <div className="community" >
      <Link to='community'>
       Click to join or create community
      </Link>
   
    </div>
    <div className="card balance">
      {/* <img src={twaLogo} alt="logo" /> */}
      <h2> {count}</h2>
    </div>
    <div className="clicker-container">
       <div
    className='Cliker'
     onTouchStart={handleTouchStart}>
      <img src={twaLogo} className="logo" alt="TWA logo" />
    </div>
    <div className="upward-numbers">1</div>
    </div>
   

    {/*  */}
    {/* <button onClick={()=>setMultiplier( multiplier +2)}>
        multiplier {multiplier} + 2
    </button> */}
    {/* <div className="card">
      <button
        onClick={() =>
          WebApp.showAlert(`Hello World! Current count is ${count}`)
        }
      >
        Show Alert
      </button>
    </div> */}
    </>
  )
}
