import { useState } from "react";
import "./App.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Faq from "./components/Faq";

// Importing all images used in the App
import bgIcon from "./images/bg.svg";
import foregroundIcon from "./images/foreground.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="basic">
        <div className="hero">
          <img className="bg-icon" alt="" src={bgIcon} />
          <img className="foreground-icon" alt="" src={foregroundIcon} />
          <Nav />
          <Home />
        </div>
        <About />
        <Faq />
      </div>
    </>
  );
}

export default App;
