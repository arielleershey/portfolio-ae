export default function Navbar() {
  return (
    <nav>
      <a href="#home" className="nav-logo">
        Arielle<em style={{ fontStyle: "italic", color: "var(--matcha)" }}>.</em>
      </a>

      <ul className="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <span className="nav-badge">Open to Internship</span>
    </nav>
  );
}