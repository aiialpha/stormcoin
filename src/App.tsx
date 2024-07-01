
import { ToastContainer } from "react-toastify";
import "./App.css";
import AppNavigations from "./AppNavigations";




import Navbar from "./components/Navbar";

function App() {
 
  return (
    <>
      <AppNavigations />
      <Navbar />
      <ToastContainer  hideProgressBar={true} position="bottom-center" closeButton={false}/>
    </>
  );
}

export default App;
