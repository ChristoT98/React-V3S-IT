import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="servicesContentContainer">
        <h3 className="servicesSubText">WHAT WE DO</h3>
        <h1 className="servicesHeadText">
          We take pride in what we do. Our services are designed to help your
          business stand out and turn your ideas into digital realities.
        </h1>
      </div>
      <div className="servicesGridContainer">
        <div className="servicesGridBox">
          <h2 className="servicesGridBoxTitle">
            <span className="servicesGridBoxIcon"> <FontAwesomeIcon icon={faStar}/> </span> Brand Identity
          </h2>
          <p className="servicesGridBoxContent">
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
            ipsa in tempora esse soluta sint.
          </p>
        </div>
        <div className="servicesGridBox">
          <h2 className="servicesGridBoxTitle">
            <span className="servicesGridBoxIcon"> <FontAwesomeIcon icon={faStar}/> </span> Illustration
          </h2>
          <p className="servicesGridBoxContent">
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
            ipsa in tempora esse soluta sint.
          </p>
        </div>
        <div className="servicesGridBox">
          <h2 className="servicesGridBoxTitle">
            <span className="servicesGridBoxIcon"> <FontAwesomeIcon icon={faStar}/> </span> Marketing
          </h2>
          <p className="servicesGridBoxContent">
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
            ipsa in tempora esse soluta sint.
          </p>
        </div>
        <div className="servicesGridBox">
          <h2 className="servicesGridBoxTitle">
            <span className="servicesGridBoxIcon"> <FontAwesomeIcon icon={faPhotoFilm}/> </span> Photography
          </h2>
          <p className="servicesGridBoxContent">
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
            ipsa in tempora esse soluta sint.
          </p>
        </div>
        <div className="servicesGridBox">
          <h2 className="servicesGridBoxTitle">
            <span className="servicesGridBoxIcon"> <FontAwesomeIcon icon={faStar}/> </span> UI/UX Design
          </h2>
          <p className="servicesGridBoxContent">
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
            ipsa in tempora esse soluta sint.
          </p>
        </div>
        <div className="servicesGridBox">
          <h2 className="servicesGridBoxTitle">
            <span className="servicesGridBoxIcon"> <FontAwesomeIcon icon={faStar}/> </span> Frontend Design
          </h2>
          <p className="servicesGridBoxContent">
            Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
            ipsa in tempora esse soluta sint.
          </p>
        </div>
      </div>
    </div>
  );
}
