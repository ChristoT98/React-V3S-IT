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
          <div className="servicesGridBoxTitleContainer">
            <div className="servicesGridBoxIcon">
            <i class="fa-regular fa-star"></i>
            </div>
            <h2 className="servicesGridBoxTitle">Brand Identity</h2>
          </div>
            <p className="servicesGridBoxDescription">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
        </div>
        <div className="servicesGridBox">
          <div className="servicesGridBoxTitleContainer">
            <div className="servicesGridBoxIcon">
            <i class="fa-solid fa-object-group"></i>
            </div>
            <h2 className="servicesGridBoxTitle">Illustration</h2>
          </div>
            <p className="servicesGridBoxDescription">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
        </div>
        <div className="servicesGridBox">
          <div className="servicesGridBoxTitleContainer">
            <div className="servicesGridBoxIcon">
            <i class="fa-solid fa-bullseye"></i>
            </div>
            <h2 className="servicesGridBoxTitle">Marketing</h2>
          </div>
            <p className="servicesGridBoxDescription">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
        </div>
        <div className="servicesGridBox">
          <div className="servicesGridBoxTitleContainer">
            <div className="servicesGridBoxIcon">
            <i class="fa-solid fa-photo-film"></i>
            </div>
            <h2 className="servicesGridBoxTitle">Photography</h2>
          </div>
            <p className="servicesGridBoxDescription">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
        </div>
        <div className="servicesGridBox">
          <div className="servicesGridBoxTitleContainer">
            <div className="servicesGridBoxIcon">
            <i class="fa-solid fa-cube"></i>
            </div>
            <h2 className="servicesGridBoxTitle">UI/UX Design</h2>
          </div>
            <p className="servicesGridBoxDescription">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
        </div>
        <div className="servicesGridBox">
          <div className="servicesGridBoxTitleContainer">
            <div className="servicesGridBoxIcon">
            <i class="fa-solid fa-shapes"></i>
            </div>
            <h2 className="servicesGridBoxTitle">Frontend Design</h2>
          </div>
            <p className="servicesGridBoxDescription">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
              ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
              veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
              voluptas ipsa in tempora esse soluta sint.
            </p>
        </div>
      </div>
    </div>
  );
}
