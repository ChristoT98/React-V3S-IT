import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerbtnContainer">
        <a href="#intro" className="footerbtnText">
          <FontAwesomeIcon icon={faArrowUp} className="btnIcon" /> Back To Top
        </a>
      </div>
      <div className="copyrightContainer">
        <span className="copyrightText">© Copyright v3s-IT 2022</span>
      </div>
    </div>
  );
}
