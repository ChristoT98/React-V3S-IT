import "./aboutComponent.css";

export default function AboutComponent(props) {
  return (
    <div className="gridBox">
      <h2 className="gridBoxTitle">
        <span className="gridBoxNumber"> {props.number} </span> {props.title}
      </h2>
      <p className="gridBoxContent">{props.description}</p>
    </div>
  );
}
