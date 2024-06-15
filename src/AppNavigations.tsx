import {useEffect,useRef,useState} from "react"
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RefPages from "./pages/RefPages";
import Boost from "./pages/Boost";
import Task from "./pages/Task";
import Notfound from "./pages/Notfound";
import TouchTest from "./test/TouchTest";



export default function AppNavigations() {

  const [ts, setTs] = useState<number | undefined>(undefined);
  const scrollableElRef = useRef<HTMLElement | null>(null);
  const overflow = 100;

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      setTs(e.touches[0].clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      const scrollableEl = scrollableElRef.current;
      if (scrollableEl) {
        const scroll = scrollableEl.scrollTop;
        const te = e.changedTouches[0].clientY;
        if (scroll <= 0 && ts !== undefined && ts < te) {
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

   useEffect(() => {
    // Set the body's overflow, margin, height, and padding
    const homeElement = document.getElementById('home');

    if (homeElement) {
      homeElement.style.overflowY = 'hidden';
      //homeElement.style.marginTop = `${overflow}px`;
      //homeElement.style.height = `${window.innerHeight + overflow}px`;
      homeElement.style.paddingBottom = `${overflow}px`;
    }

    // Scroll to the specified position
    window.scrollTo(0, overflow);

    // Clean up the styles when the component unmounts
    return () => {
      if (homeElement) {
        homeElement.style.overflowY = '';
        // homeElement.style.marginTop = '';
        // homeElement.style.height = '';
        // homeElement.style.paddingBottom = '';
      }
    };
  }, [overflow]);
  // useEffect(() => {
  //   // Set the body's overflow, margin, height, and padding
  //   document.body.style.overflowY = 'hidden';
  //   document.body.style.marginTop = `${overflow}px`;
  //   document.body.style.height = `${window.innerHeight + overflow}px`;
  //   document.body.style.paddingBottom = `${overflow}px`;

  //   // Scroll to the specified position
  //   window.scrollTo(0, overflow);

  //   // Clean up the styles when the component unmounts
  //   return () => {
  //     document.body.style.overflowY = '';
  //     document.body.style.marginTop = '';
  //     document.body.style.height = '';
  //     document.body.style.paddingBottom = '';
  //   };
  // }, []);

  return (
    <main ref={scrollableElRef}>
        <Routes>
      <Route path="stormcoin">
        <Route index element={<Home />} />
        <Route path="ref" element={<RefPages />} />
        <Route path="boost" element={<Boost />} />
        <Route path="task" element={<Task />} />
        <Route path="community" element={<div>Community Page</div>} />
        <Route path="test" element={<TouchTest />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
        {/* <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          
          <Route path="stormcoin" >
            <Route index element={<Home/>} />
            <Route path="ref" element={<RefPages/>} />
            <Route path="boost" element={<Boost />} />
            <Route path="task" element={<Task />} />
            <Route path="community"  />
          </Route>
        </Route>
      </Routes> */}
      <Outlet />  
    </main>
  )
}
