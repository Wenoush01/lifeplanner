import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Dashboard from "./pages/Dashboard"
import Tasks from "./pages/Tasks"

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
