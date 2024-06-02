
import { Link } from 'react-router-dom';
// import twaLogo from '../assets/tapps.png'
import  useCountContext  from '../UseContext';
import { useState } from 'react';
import Coin from '../components/Coin';

interface Animation {
  id: number;
  x: number;
  y: number;
}
// import WebApp from "@twa-dev/sdk";

export default function  Home(){
    const {count, setCount} = useCountContext();
  //fetch('http://localhost:9092/get_details')
  //.then(res => res.json())
 // .then(data => console.log(data))
    const [animations, setAnimations] = useState<Animation[]>([]);
    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement> ) => {
      setCount(prevCount => prevCount + 1);
  
      // Get the coordinates of the touch or click event
      const x =  (event.touches && event.touches[0].clientX);
      const y =  (event.touches && event.touches[0].clientY);
      //const touch = event?.touches[0];
      //const x = touch.clientX;
      //const y = touch.clientY;
      // Create a unique key for the animation instance
      const newAnimation: Animation = { id: Date.now(), x, y };
  
      // Add a new animated instance to the array
      setAnimations(prevAnimations => [...prevAnimations, newAnimation]);
  
      // Remove the animated instance after the animation duration
      setTimeout(() => {
        setAnimations(prevAnimations => prevAnimations.filter(anim => anim.id !== newAnimation.id));
      }, 2000); // Duration should match the CSS animation duration
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
     onTouchStart={handleTouchStart} 
     >
      <Coin />
      {/* <img src={twaLogo} className="logo" alt="TWA logo"/> */}
    </div>
    {animations.map(anim => (
          <div
            key={anim.id}
            className="upward-numbers"
            style={{ left: anim.x, top: anim.y }}
          >
            1
          </div>
        ))}
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
