import { useEffect } from "react";
import "./App.css";
import AppNavigations from "./AppNavigations";


import Navbar from "./components/Navbar";
// declare global {
//   interface Window {
//     Telegram: any;
//   }
// }

function App() {
  useEffect(() => {
    const webApp = window.Telegram.WebApp;

    // Function to repeatedly expand the web app
    const keepExpanded = () => {
      webApp.expand();
      setTimeout(keepExpanded, 1000); // Call expand every second
    };

    // Initial expand call
    keepExpanded();

    // Optional: Hide the back button if necessary
    webApp.BackButton.hide();

  }, []);
  return (
    <>
      <AppNavigations />
      <Navbar />
    </>
  );
}

export default App;
