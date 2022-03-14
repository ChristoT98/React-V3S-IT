import { useState } from "react";
import "./topbar.css";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const [wrapper, setWrapper] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setWrapper(true);
    } else {
      setWrapper(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className={wrapper ? "wrapper active" : "wrapper"}>
        <div className="left">
          <a href="#intro">
            <img className="logo" src="assets/images/logo.jpeg" alt="logo" />
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+94 77 123 45 67</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>info@v3s-it.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
