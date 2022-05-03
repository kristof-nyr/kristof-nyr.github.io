import React from "react";
import Nav from './components/Nav';
import Landing from "./components/Landing";
import Motto from "./components/Motto";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

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
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
