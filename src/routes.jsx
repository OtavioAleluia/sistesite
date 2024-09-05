import Login from "./pages/login";
import Home from "./pages/home";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Clientes from "./pages/clients";


const router = createBrowserRouter([
    {path:"/login",
    element:<Login />
    },

    {path: "*",       //toda rota invalida vai para login  
    element:<Login />
    },

            
    {
    path: "/home",
    Element: <App />,
    children:{
        path: "/clients",
        element: <Clientes/>
    }
    } 
])

export default router
    