export default function SkillBlock({ title, items }) {
  return (
    <div className="skill-block">
      <div className="skill-block-title">{title}</div>

      <div className="skill-tags">
        {items.map((item, i) => (
          <span
            key={i}
            className={`skill-tag ${item.primary ? "primary" : ""}`}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}