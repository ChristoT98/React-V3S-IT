import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./intro.css";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <video autoPlay loop muted>
        <source src="assets/videos/background.mp4" type="video/mp4" />
      </video>
        <div className="titleContainer">
          <h1 className="introTitle slideUp">V3S-IT</h1>
          <h2 className="introSlogan slideUp">We build brands and beautiful experiences</h2>
          <div className="introBtnContainer slideUp">
            <a href="#about" className="introBtn introBtnAbout">
              More About Us
            </a>
            <a href="#contact" className="introBtn introBtnContact">
              Let's Talk
            </a>
          </div>
        </div>
        <div className="socialIconContainer">
          <ul>
            <li>
              <a href="#about" className="socialIcon">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>
            <li>
              <a href="#about" className="socialIcon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#about" className="socialIcon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#about" className="socialIcon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
    </div>
  );
}
