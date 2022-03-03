import React from "react";
import Nav from './components/Nav';
import Landing from "./components/Landing";
import Cursor from "./components/CircleCursor";
import Motto from "./components/Motto";

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

      </section>
      <section id="projects">

      </section>
    </div>
  );
}

export default App;
