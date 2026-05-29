import { skills } from "../data/skills";
import SkillBlock from "../components/SkillBlock";

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-line"></div>
      </div>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <SkillBlock
            key={i}
            title={group.title}
            items={group.items}
          />
        ))}
      </div>
    </section>
  );
}