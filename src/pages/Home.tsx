
import { Link } from 'react-router-dom';
import twaLogo from '../assets/tapps.png'
import  useCountContext  from '../UseContext';


// import WebApp from "@twa-dev/sdk";

export default function  Home(){
    const {count, setCount} = useCountContext();
  
   
  return (
    <>
    <div className="community">
      <Link to='community'>
       Click to join or create community
      </Link>
   
    </div>
    <h2>Storm Coin </h2>
    <div className="card">
      <h3>count is {count}</h3>
    </div>
    <div onClick={() => setCount((count) => count + 1)}>
      <img src={twaLogo} className="logo" alt="TWA logo" />
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
