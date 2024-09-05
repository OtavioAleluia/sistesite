import {Outlet} from "react-router-dom"
import './index.css'
function App() {
  return (
    <Nav>barra de navegacao</Nav>
    <div className="app"> </div>
    <Outlet />
    <footer> footer</footer>
  );
}

export default App;
