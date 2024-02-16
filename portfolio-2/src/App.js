import "./App.css";
import About from "./components/pages/about/About";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/pages/sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="side">
          <nav className="navbar side navbar-expand-lg navbar-light p-0">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              // style={{ zIndex: "1" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >

            </div>
            <Sidebar />
          </nav>
        </div>
        <div className="main">
          <About />
        </div>
      </div>
    </Router>
  );
}

export default App;
