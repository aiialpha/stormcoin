import {useEffect,useRef} from "react"
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RefPages from "./pages/RefPages";
import Boost from "./pages/Boost";
import Task from "./pages/Task";
import Notfound from "./pages/Notfound";
import TouchTest from "./test/TouchTest";



export default function AppNavigations() {

  const scrollableElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ensureDocumentIsScrollable = () => {
      const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
      if (!isScrollable) {
        document.documentElement.style.setProperty(
          "height",
          "calc(100vh + 1px)",
          "important"
        );
      }
    };

    const preventCollapse = () => {
     // console.log(event)
      if (window.scrollY === 0) {
        window.scrollTo(0, 1);
      }
    };

    // Call ensureDocumentIsScrollable function when the component is mounted
    ensureDocumentIsScrollable();

    // Attach the preventCollapse function to the touchstart event handler of the scrollable element
    const element = scrollableElementRef.current;
    if (element) {
      element.addEventListener("touchstart", preventCollapse);
    }

    // Cleanup function to remove event listener
    return () => {
      if (element) {
        element.removeEventListener("touchstart", preventCollapse);
      }
    };
  }, []);


  return (
    <main ref={scrollableElementRef}>
       <Routes>
        <Route path='stormcoin' element={<Home />}/>
        <Route path="ref" element={<RefPages />} />
        <Route path="boost" element={<Boost />}/>
        <Route path="task" element={<Task />} />
        <Route path ="community" />
        <Route path="test" element={<TouchTest />} />
        <Route path="*" element={<Notfound />} />
        </Routes> 
      <Outlet />  
    </main>
  )
}
