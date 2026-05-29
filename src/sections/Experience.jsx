import { experience } from "../data/experience";
import ExperienceItem from "../components/ExperienceItem";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </div>

      <div className="exp-list">
        {experience.map((item, i) => (
          <ExperienceItem key={i} item={item} />
        ))}
      </div>
    </section>
  );
}