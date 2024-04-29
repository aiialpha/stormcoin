import { useState } from "react";
import twaLogo from "./assets/tapps.png";
import "./App.css";

import WebApp from "@twa-dev/sdk";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Storm Coin </h2>
      <div className="card">
        <button>count is {count}</button>
      </div>
      <div onClick={() => setCount((count) => count + 2)}>
        <img src={twaLogo} className="logo" alt="TWA logo" />
      </div>

      {/*  */}
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Show Alert
        </button>
      </div>
      <Navbar />
    
    </>
  );
}

export default App;
