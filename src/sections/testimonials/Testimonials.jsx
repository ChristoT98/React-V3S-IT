import "./testimonials.css";
import testimonialData from "../../data/testimonialData";
import TestimonialComponent from "../../components/testimonialComponent/TestimonialComponent";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {testimonialData.map((item) => (
          <TestimonialComponent
            key={item.id}
            featured={item.featured}
            icon={item.icon}
            title={item.title}
            img={item.img}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}
