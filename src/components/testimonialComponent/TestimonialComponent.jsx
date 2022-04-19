import "./testimonialComponent.css";

export default function TestimonialComponent(props) {
  return (
    <div className={props.featured ? "card featured" : "card"}>
      <div className="top">
        <img src="assets/icons/right-arrow.png" className="left" alt="" />
        <img className="user" src={props.img} alt="" />
        <img className="right" src={props.icon} alt="" />
      </div>
      <div className="center">{props.desc}</div>
      <div className="bottom">
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}
