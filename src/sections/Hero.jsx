import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <div className="hero-tag">{site.tag}</div>

        <h1 className="hero-name">
          {site.name.split(" ")[0]} <br />
          <em>{site.name.split(" ")[1]}</em>
        </h1>

        <p className="hero-sub">{site.role} · {site.school}</p>

        <p className="hero-desc">{site.description}</p>

        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <div className="stat-grid">
          <div className="stat-item">
            <div className="stat-num">6</div>
            <div className="stat-label">School Projects</div>
          </div>

          <div className="stat-item">
            <div className="stat-num">2</div>
            <div className="stat-label">Deployed Apps</div>
          </div>

          <div className="stat-item">
            <div className="stat-num">2</div>
            <div className="stat-label">Certs</div>
          </div>

          <div className="stat-item">
            <div className="stat-num">2027</div>
            <div className="stat-label">Expected Grad</div>
          </div>
        </div>

        <div className="avail-pill">
          <span className="avail-dot"></span>
          {site.status}
        </div>
      </div>
    </section>
  );
}