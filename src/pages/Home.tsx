
import { Link } from 'react-router-dom';
// import twaLogo from '../assets/tapps.png'
import  useAppContext  from '../UseContext';
import {useEffect,useRef,useState} from "react"
import Coin from '../components/Coin';

interface Animation {
  id: number;
  x: number;
  y: number;
}
// import WebApp from "@twa-dev/sdk";

export default function  Home(){
    const {count, setCount} = useAppContext();
 // fetch('http://localhost:9092/get_details', {
 // })
  //.then(res => res.json())
// .then(data => console.log(data))
    const [animations, setAnimations] = useState<Animation[]>([]);
    const handleTouchStart = (event: React.TouchEvent<HTMLCanvasElement>) => {
      //setCount(prevCount => prevCount + 1 );
   //console.log(event.touches.length)
     
       // Iterate over all touches
    const newAnimations = Array.from(event.touches).map(touch => ({
      id: Date.now() + touch.identifier, // Ensure unique ID for each touch
      x: touch.clientX,
      y: touch.clientY,
    }));

    // Add new animated instances to the array
    setAnimations(prevAnimations => [...prevAnimations, ...newAnimations]);

    // Remove the animated instances after the animation duration
    newAnimations.forEach(newAnimation => {
      setCount(prevCount => prevCount + 1);
      setTimeout(() => {
        setAnimations(prevAnimations => prevAnimations.filter(anim => anim.id !== newAnimation.id));
      }, 1500); // Duration should match the CSS animation duration
    });
  };

  const [ts, setTs] = useState<number | undefined>(undefined);
  const scrollableElRef = useRef<HTMLDivElement | null>(null);
  //const overflow = 100;

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      setTs(e.touches[0].clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      const scrollableEl = scrollableElRef.current;
      if (scrollableEl) {
        const scroll = scrollableEl.scrollTop;
       // const te = e.changedTouches[0].clientY;
      //  && ts !== undefined && ts < te
        if (scroll <= 0 ) {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
      }
    };

    document.documentElement.addEventListener('touchstart', onTouchStart, { passive: false });
    document.documentElement.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      document.documentElement.removeEventListener('touchstart', onTouchStart);
      document.documentElement.removeEventListener('touchmove', onTouchMove);
    };
  }, [ts]);


 // Get the coordinates of the touch or click event
   //   const x =  (event.touches && event.touches[0].clientX);
    //  const y =  (event.touches && event.touches[0].clientY);
      

    //   // Create a unique key for the animation instance
    //   const newAnimation: Animation = { id: Date.now(), x, y };
  
    //   // Add a new animated instance to the array
    //   setAnimations(prevAnimations => [...prevAnimations, newAnimation]);
  
    //   // Remove the animated instance after the animation duration
    //   setTimeout(() => {
    //     setAnimations(prevAnimations => prevAnimations.filter(anim => anim.id !== newAnimation.id));
    //   }, 2000); // Duration should match the CSS animation duration
    // };
   
  return (
    <div id='home' ref={scrollableElRef}>
    <div className="community" >
      <Link to='community'>
       Click to join or create community
      </Link>
   
    </div>
    <div className="balance-container">
      {/* <img src={twaLogo} alt="logo" /> */}
      <h2 className='balance'> {count}</h2>
    </div>
    <div className="clicker-container">
       <div
    className='Cliker'
    //  onTouchStart={handleTouchStart} 
     >
      <Coin touch={handleTouchStart} />
          {animations.map(anim => (
          <div
            key={anim.id}
            className="upward-numbers"
            style={{ left: anim.x - 80, top: anim.y - 235 }}
          >
            1
          </div>
        ))}
      {/* <img src={twaLogo} className="logo" alt="TWA logo"/> */}
    </div>

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
    </div>
  )
}
