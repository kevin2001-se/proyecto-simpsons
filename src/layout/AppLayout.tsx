import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div className="w-full relative min-h-screen font-jua flex flex-col">
        <Navbar />

        <Outlet />
    </div>
  )
}
