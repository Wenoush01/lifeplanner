import React from "react"
import { Link } from "react-router-dom"
import logo1 from "../assets/logos/logo1.png"
import grid from "../assets/icons/grid.svg"
import personWalking from "../assets/icons/person-walking.svg"
import tasklist from "../assets/icons/list-task.svg"
import calendar from "../assets/icons/calendar.svg"
import diet from "../assets/icons/fork-knife.svg"
import moon from "../assets/icons/moon-stars-fill.svg"
import book from "../assets/icons/book.svg"





export default function Sidebar() {
    return (
        <div className="bg-dark text-white p-3 shadow" 
        style={{
            width: "250px",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
        }}
        >
            <div>
                <img src={logo1} alt="Logo" className="img-fluid border"/>
            </div>
            <div className="mt-3 fs-5">
                <h6 class="nav-pages">Pages</h6>
                <ul className="nav flex-column text-start">
                    <li className="nav-item border-top mt-2">
                        <Link to="/" className="nav-item">
                        <img src={grid} alt="gridIcon" className="p-1 pb-2 img-fluid"/>Dashboard
                        </Link>
                    </li>
                    <li className="nav-item border-top">
                        <Link to="/tasks" className="nav-item">
                        <img src={tasklist} alt="taskIcon" className="p-1 pb-2 img-fluid"/>
                        Tasks
                        </Link>
                    </li>
                    <li className="nav-item border-top">
                        <Link to="/fitness" className="nav-item">
                        <img src={personWalking} alt="personWalkingIcon" className="p-1 pb-2 img-fluid"/>
                        Fitness
                        </Link>
                    </li>
                    <li className="nav-item border-top">
                        <Link to="/calendar" className="nav-item">
                        <img src={calendar} alt="calendarIcon" className="p-1 pb-2 img-fluid"/>
                        Calendar
                        </Link>
                    </li>
                    <li className="nav-item border-top">
                        <Link to="/diet" className="nav-item">
                        <img src={diet} alt="dietIcon" className="p-1 pb-2 img-fluid"/>
                        Diet
                        </Link>
                    </li>
                    <li className="nav-item border-top">
                        <Link to="/sleep" className="nav-item">
                        <img src={moon} alt="sleepIcon" className="p-1 pb-2 img-fluid"/>
                        Sleep
                        </Link>
                    </li>
                    <li className="nav-item border-top">
                        <Link to="/study" className="nav-item">
                        <img src={book} alt="bookIcon" className="p-1 pb-2 img-fluid"/>
                        Study
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}