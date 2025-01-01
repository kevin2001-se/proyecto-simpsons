import { BrowserRouter, Route, Routes } from "react-router";
import App from "./pages/App";
import AppLayout from "./layout/AppLayout";
import Favorite from "./pages/Favorite";
import Login from "./pages/Login";
import RecoverPassword from "./pages/RecoverPassword";
import ChangePassword from "./pages/ChangePassword";
import AuthLayout from "./components/AuthLayout";
import NotFound from "./pages/error/NotFound";
import Search from "./pages/Search";
import Register from "./pages/Register";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            {/* Index */}
            <Route element={<AppLayout />}>
                <Route path="/" element={<App />} />
                <Route path="/search" element={<Search />} />
                <Route element={<AuthLayout />}>
                  <Route path="/favorite" element={<Favorite />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recover-password" element={<RecoverPassword />} />
                <Route path="/password-reset/:token" element={<ChangePassword />} />
            </Route>
            <Route element={<AppLayout />}>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
