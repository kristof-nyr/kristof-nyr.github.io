import React from "react";
import Nav from './components/Nav';
import Landing from "./components/Landing";
import Cursor from "./components/CircleCursor";

function App() {
  return (
    <div className="App">
      <Nav />
      <Cursor/>
      <section id="landing">
        <Landing/>
      </section>
      <section id="motto">

      </section>
      <section id="about">

      </section>
      <section id="projects">

      </section>
    </div>
  );
}

export default App;
