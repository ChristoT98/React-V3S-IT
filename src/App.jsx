import { useState } from "react";
import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Services />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
