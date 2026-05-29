export default function ProjectItem({ project }) {
  return (
    <div className="project-item">
      <span className="project-num">{project.id}</span>

      <div>
        <div className="project-name">{project.name}</div>

        <p className="project-desc">{project.desc}</p>

        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {project.link ? (
        <a
          href={project.link}
          className="project-link"
          target="_blank"
        >
          GitHub
        </a>
      ) : (
        <span className="project-link na">N/A</span>
      )}
    </div>
  );
}