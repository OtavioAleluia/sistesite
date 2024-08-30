import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/login";

export default function AppRouters() {

    return (
        <Router>
            <Routes>
                <Route path='/home'
                element={<Login />} />
            </Routes>
        </Router>

    )

} 