import Login from "./pages/login";
import Home from "./pages/home";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {path:"/login",
    element:<Login />
    },

    {path: "*",       //toda rota invalida vai para login  
    element:<Login />
    },

            
    {
    path: "/home",
    Element: <Home />
    } 
])

export default router
    