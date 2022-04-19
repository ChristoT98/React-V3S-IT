import "./serviceComponent.css";

export default function ServiceComponent(props) {
  return (
    <div className="servicesGridBox">
      <div className="servicesGridBoxTitleContainer">
        <div className="servicesGridBoxIcon">{props.icon}</div>
        <h2 className="servicesGridBoxTitle">{props.title}</h2>
      </div>
      <p className="servicesGridBoxDescription">{props.description}</p>
    </div>
  );
}
