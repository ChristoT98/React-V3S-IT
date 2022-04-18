import { useState } from "react";
import { PhoneEnabled, Mail } from "@material-ui/icons";
import "./topbar.css";

export default function Topbar({ menuOpen, setMenuOpen }) {

  const [wrapperColor, setWrapperColor] = useState(false);

  const changeWrapperColor = () => {
    if (window.scrollY >= 80) {
      setWrapperColor(true);
    } else {
      setWrapperColor(false);
    }
  };

  window.addEventListener("scroll", changeWrapperColor);

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className={wrapperColor ? "wrapper active" : "wrapper"}>
        <div className="left">
          <a href="#intro">
            <img className="logo" src="assets/images/logo.jpeg" alt="logo" />
          </a>
          <div className="itemContainer">
            <PhoneEnabled className="icon" />
            <span className="itemText">+94 11 123 45 67</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span className="itemText">info@v3s-it.com</span>
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