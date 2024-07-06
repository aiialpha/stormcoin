
import { ToastContainer } from "react-toastify";
import "./App.css";
import AppNavigations from "./AppNavigations";




import Navbar from "./components/Navbar";
import Desktop from "./Desktop.tsx"
import { useState } from "react";

function App() {
  const [desktop]= useState(false)
 
  return (
    <>
     {desktop ? <Desktop /> : 
     <>
      <AppNavigations />
      <Navbar />
      <ToastContainer  hideProgressBar={true} position="bottom-center" closeButton={false}/>
     </> }
    </>
  );
}

export default App;
