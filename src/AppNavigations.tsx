import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RefPages from "./pages/RefPages";
import Boost from "./pages/Boost";
import Task from "./pages/Task";



export default function AppNavigations() {

  return (
    <main>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="ref" element={<RefPages />} />
        <Route path="boost" element={<Boost />}/>
        <Route path="task" element={<Task />} />
        </Routes> 
      <Outlet />  
    </main>
  )
}
