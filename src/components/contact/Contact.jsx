import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="subHeadContainer">
        <h3 className="subHeadText">Keep In Touch</h3>
      </div>
      <div className="headContainer">
        <h1 className="headText">
          Feel free to contact us for any project idea or collaboration
        </h1>
      </div>
      <div className="emailContainer">
        <a href="mailto:info@v3s-it.com" className="emailText">
          info@v3s-it.com
        </a>
      </div>
      <div className="addressContainer">
        <span className="addressText">49 Deans Road</span>
        <span className="addressText">Colombo 10, Sri Lanka</span>
        <span className="addressText">+94 (011) 345 67 89</span>
      </div>
      <div className="contactIconContainer">
        <ul className="contactIconList">
          <li className="contactIconItem">
            <a href="#about">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </li>
          <li className="contactIconItem">
            <a href="#about">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="contactIconItem">
            <a href="#about">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="contactIconItem">
            <a href="#about">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
