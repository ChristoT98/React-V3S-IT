import "./intro.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="content">
        <h1 className="slideUp">V3S-IT</h1>
        <h2 className="slideUp">We build brands and beautiful experiences</h2>
        <div className="introBtnContainer slideUp">
            <a href="" className="introBtnAbout btn">
              More About Us
            </a>
            <a href="" className="introBtnContact btn">
              Let's Talk
            </a>
        </div>
        <h5 style={{color: 'black'}}>Heyyyy</h5>
        <div className="socialIcons">
       <ul><li><a href=""><FontAwesomeIcon icon={faCoffee} /></a></li></ul>
        </div>
      </div>
      <div>
     
      </div>
    </div>
  );
}
