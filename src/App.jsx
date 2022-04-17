import { useState } from "react";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Info from "./components/info/Info";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Info/>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
         <Intro />
        <About />
        {/*<Services />
        <Testimonials />*/}
        <Contact /> 
        <Footer /> 
      </div>
    </div>
  );
}

export default App;
