import "./menu.css";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="menuTitleContainer slideLeft">
        <h4 className="menuTitle"> NAVIGATE TO </h4>
        <span className="navigateLine"></span>
      </div>
      <ul className="slideLeft">
        <li
          className="introSlider slideLeft"
          onClick={() => setMenuOpen(false)}
        >
          <a href="#intro">Home</a>
        </li>
        <li
          className="aboutSlider slideLeft"
          onClick={() => setMenuOpen(false)}
        >
          <a href="#about">About</a>
        </li>
        <li
          className="servicesSlider slideLeft"
          onClick={() => setMenuOpen(false)}
        >
          <a href="#services">Services</a>
        </li>
        <li
          className="worksSlider slideLeft"
          onClick={() => setMenuOpen(false)}
        >
          <a href="#testimonials">Testimonials</a>
        </li>
        <li
          className="contactSlider slideLeft"
          onClick={() => setMenuOpen(false)}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
