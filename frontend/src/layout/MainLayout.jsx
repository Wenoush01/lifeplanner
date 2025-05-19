import Sidebar from "../components/sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="d-flex min-vh-100">
            <Sidebar />
            <div className="flex-grow-1 d-flex flex-column">
                <Topbar />
                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}