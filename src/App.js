import React from "react";
import Nav from './components/Nav';
import Landing from "./components/Landing";
import Motto from "./components/Motto";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <section id="landing">
        <Landing/>
      </section>
      <section id="motto">
        <Motto />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </div>
  );
}

export default App;
