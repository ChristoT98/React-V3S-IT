import "./services.css";
import serviceData from "../../data/serviceData";
import ServiceComponent from "../../components/serviceComponent/ServiceComponent";

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
        {serviceData.map((item) => (
          <ServiceComponent
            key={item.id}
            icon={<i className={item.icon}></i>}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
