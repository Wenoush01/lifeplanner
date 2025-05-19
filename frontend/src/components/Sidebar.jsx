import React from "react"
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="bg-dark text-white p-3" 
        
        style={{
            width: "250px",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
        }}
        >
            <h4>Life Planner</h4>
    
            <div className="pt-5 fs-5">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/" className="nav-item">
                        Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tasks">
                        ✅Tasks
                        </Link>

                    </li>

                </ul>
            </div>
        </div>
    )
}