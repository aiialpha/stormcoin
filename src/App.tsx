
import "./App.css";
import AppNavigations from "./AppNavigations";
import PreventSwipeDown from "./PreventSwipeDown";



import Navbar from "./components/Navbar";

function App() {
 
  return (
    <>
      <PreventSwipeDown />
      <AppNavigations />
      <Navbar />
    </>
  );
}

export default App;
