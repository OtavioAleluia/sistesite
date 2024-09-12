import {Outlet} from "react-router-dom"
import './index.css'
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="flex">
      <Navbar />
      <Outlet />
      <footer> footer</footer>

    </div>
    
  );
}

export default App;
