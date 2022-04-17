import "./info.css";
import { PhoneEnabled, Mail } from "@material-ui/icons";

export default function Info() {
  return (
    <div className="info">
      <div className="infoContainer">
        <PhoneEnabled className="infoIcon" style={{fontSize: '12px'}} />
        <span className="infoItemText">+94 11 123 45 67</span>
      </div>
      <div className="infoContainer">
        <Mail className="infoIcon" style={{fontSize: '12px'}} />
        <span className="infoItemText">info@v3s-it.com</span>
      </div>
    </div>
  );
}
