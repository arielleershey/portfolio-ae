import { projects } from "../data/projects";
import ProjectItem from "../components/ProjectItem";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}