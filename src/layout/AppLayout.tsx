import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

export default function AppLayout() {
  return (
    <div className="w-full relative min-h-screen font-jua flex flex-col">
        <Navbar />

        <Outlet />
        <Toaster position="top-center" />
    </div>
  )
}
