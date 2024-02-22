import React from "react";
import About from './components/About.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js'

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
