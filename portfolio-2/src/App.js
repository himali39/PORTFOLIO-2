import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./components/mainComponent/MainComponent";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const customCursor = document.getElementById('customCursor');

    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      customCursor.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
    <div className="App">
      <MainComponent />
    </div>
  );
}

export default App;
