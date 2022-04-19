import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./intro.css";
import SocialIcon from "../../components/socialIconComponent/SocialIconComponent";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <video autoPlay loop muted>
        <source src="assets/videos/background.mp4" type="video/mp4" />
      </video>
      <div className="titleContainer">
        <h1 className="introTitle slideUp">V3S-IT</h1>
        <h2 className="introSlogan slideUp">
          We build brands and beautiful experiences
        </h2>
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
          <SocialIcon
            url="#facebook"
            icon={<FontAwesomeIcon icon={faFacebookSquare} />}
            className="socialIcon"
          />
          <SocialIcon
            url="#twitter"
            icon={<FontAwesomeIcon icon={faTwitter} />}
            className="socialIcon"
          />
          <SocialIcon
            url="#insta"
            icon={<FontAwesomeIcon icon={faInstagram} />}
            className="socialIcon"
          />
          <SocialIcon
            url="#linked"
            icon={<FontAwesomeIcon icon={faLinkedin} />}
            className="socialIcon"
          />
        </ul>
      </div>
    </div>
  );
}
