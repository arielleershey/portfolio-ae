export default function ExperienceItem({ item }) {
  return (
    <div className="exp-item">
      {/* LEFT SIDE */}
      <div className="exp-meta">
        <div className="exp-date">{item.type}</div>
        <div className="exp-company">{item.company}</div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <div className="exp-role">{item.role}</div>

        <ul className="exp-details">
          {item.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}