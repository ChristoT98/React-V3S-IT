import AboutComponent from "../../components/aboutComponent/AboutComponent";
import "./about.css";
import aboutData from "../../data/aboutData";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="aboutContentContainer">
        <h3 className="aboutSubText">Who We Are</h3>
        <h1 className="aboutHeadText">
          We are v3s-IT, a design and branding agency with partners worldwide.
          We design thoughtful digital experiences and beautiful brand
          aesthetics.
        </h1>
        <h2 className="aboutDescriptionText">
          It was a bow, a layer of this financing and, ferry at sem. Until the
          makeup of the lion needs Uncategorized The pain itself is love, the
          main iterative process, but I give it time as low as fatigue and
          obesity. For more information on what we do the school district's
          employment is only to achieve its objectives. The pain is to blame in
          he wants pleasure to be.
        </h2>
      </div>
      <div className="aboutGridContainer">
        {aboutData.map((item) => (
          <AboutComponent
            key={item.id}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
