import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Dashboard from "./pages/Dashboard"
import Tasks from "./pages/Tasks"
import Fitness from "./pages/Fitness"
import Calendar from "./pages/Calendar"
import Diet from "./pages/Diet"
import Sleep from "./pages/Sleep"
import Study from "./pages/Study"

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/fitness" element={<Fitness/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/diet" element={<Diet/>}/>
            <Route path="/sleep" element={<Sleep/>}/>
            <Route path="/study" element={<Study/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
