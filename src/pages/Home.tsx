import { useState } from "react"
import twaLogo from '../assets/tapps.png'


// import WebApp from "@twa-dev/sdk";

export default function Home() {
    const [count, setCount] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
  return (
    <>
    <h2>Storm Coin </h2>
    <div className="card">
      <h3>count is {count}</h3>
    </div>
    <div onClick={() => setCount((count) => count + multiplier)}>
      <img src={twaLogo} className="logo" alt="TWA logo" />
    </div>

    {/*  */}
    <button onClick={()=>setMultiplier( multiplier +2)}>
        multiplier {multiplier} + 2
    </button>
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
