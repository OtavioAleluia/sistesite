import {Outlet} from "react-router-dom"
import './index.css'
function App() {
  return (
    <div>
      <p>navbar</p>
      <div className="app"> </div>
      <Outlet />
      <footer> footer</footer>

    </div>
    
  );
}

export default App;
