import React from "react";
import Nav from './components/Nav';
import Landing from "./components/Landing";
// import Cursor from "./components/CircleCursor";
import Motto from "./components/Motto";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Cursor/> */}
      <section id="landing">
        <Landing/>
      </section>
      <section id="motto">
        <Motto />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
