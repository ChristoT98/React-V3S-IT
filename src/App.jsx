import { useState } from "react";
import Topbar from "./components/topbarComponent/TopbarComponent";
import Menu from "./components/menuComponent/MenuComponent";
import Intro from "./sections/intro/Intro";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Testimonials from "./sections/testimonials/Testimonials";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Info from "./components/infoComponent/InfoComponent";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Info />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div>
        <Intro />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
