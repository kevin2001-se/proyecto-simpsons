import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import AppLayout from "./layout/AppLayout";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            {/* Index */}
            <Route element={<AppLayout />}>
                <Route path="/" element={<App />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
