import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RefPages from "./pages/RefPages";
import Boost from "./pages/Boost";
import Task from "./pages/Task";
import Notfound from "./pages/Notfound";
import TouchTest from "./test/TouchTest";



export default function AppNavigations() {
  return (
    <main>
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
