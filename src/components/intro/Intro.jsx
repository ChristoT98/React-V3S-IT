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
      <div className="introContentContainer">
        <div className="titleContainer">
          <h1 className="introTitle slideUp">V3S-IT</h1>
          <h2 className="introSlogan slideUp">We build brands and beautiful experiences</h2>
          <div className="introBtnContainer slideUp">
            <a href="" className="introBtnAbout btn">
              More About Us
            </a>
            <a href="" className="introBtnContact btn">
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
    </div>
  );
}
