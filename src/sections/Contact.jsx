import { useState } from "react";
import { contact } from "../data/contact";

export default function Contact() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="contact">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <div className="section-header" style={{ marginBottom: 40 }}>
          <span className="section-num">04</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line"></div>
        </div>

        <p className="contact-bio">{contact.bio}</p>

        <div className="contact-links">
          {contact.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="contact-link"
              target={link.type === "external" ? "_blank" : undefined}
              rel="noreferrer"
            >
              <span>{link.label}</span>
              <span className="contact-link-arrow">
                {link.type === "email" ? "→" : "↗"}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        <div className="cert-title">Certifications</div>

        <div className="cert-list">
          {contact.certs.map((c, i) => (
            <div
              key={i}
              className="cert-item"
              onClick={() => setSelectedCert(c)}
            >
              <div className="cert-icon">PDF</div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="edu-block">
          <div className="edu-degree">{contact.education.degree}</div>
          <div className="edu-uni">{contact.education.school}</div>
          <div className="edu-detail">{contact.education.detail}</div>
        </div>
      </div>

      {/* MODAL */}
      {selectedCert && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCert(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedCert.file}
              alt={selectedCert.name}
              className="cert-preview"
            />

            <button
              className="close-btn"
              onClick={() => setSelectedCert(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}