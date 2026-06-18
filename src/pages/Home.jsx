import pro1 from "../assets/gokul.jpg";
import { useState } from "react";
import resume from "../assets/Resume.pdf";
import Details from "./Details";
import { Link } from "react-router-dom";
export default function Home() {
  const [zoomed, setZoomed] = useState(false);

  const handleClick = () => {
    setZoomed(!zoomed);
  };

  return (
    <>
    <div>
      <div className="section two-col hero-panel">
        <div className="left hero-copy">
          <span className="eyebrow">Full Stack Developer</span>
          <h1 className="hero-title">Tamilselvan R</h1>

          <p className="hero-subtitle">
Full Stack Developer skilled in crafting clean UIs, building reliable APIs, and delivering practical, scalable product solutions. Passionate about turning ideas into user‑friendly applications with strong frontend and backend expertise.
          </p>

<div className="chip-row">
  <span className="chip">HTML</span>
  <span className="chip">CSS</span>
  <span className="chip">JavaScript</span>
  <span className="chip">React</span>
  <span className="chip">Angular</span>
  <span className="chip">Responsive Design</span>
  <span className="chip">UI/UX Principles</span>
  <span className="chip">Node.js</span>
  <span className="chip">Express.js</span>
  <span className="chip">Java</span>
  {/* <span className="chip">Spring Boot</span> */}
  <span className="chip">RESTful APIs</span>
  {/* <span className="chip">GraphQL</span> */}
  <span className="chip">Authentication & Security</span>
  <span className="chip">Microservices</span>
  <span className="chip">SQL</span>
  <span className="chip">PostgreSQL</span>
  <span className="chip">MongoDB</span>
  {/* <span className="chip">Redis</span>
  <span className="chip">ORM Tools</span> */}
  <span className="chip">Git</span>
  <span className="chip">CI/CD</span>
  {/* <span className="chip">Docker</span>
  <span className="chip">Kubernetes</span>
  <span className="chip">AWS</span>
  <span className="chip">Azure</span> */}
  <span className="chip">Testing</span>
  <span className="chip">Agile</span>
  <span className="chip">Debugging</span>
</div>


          <div className="stats-row">
            <div className="stat-card">
              <span className="stat-value">4+</span>
              <span className="stat-label">Projects shipped</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">9</span>
              <span className="stat-label">Core skills</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">1</span>
              <span className="stat-label">Internship</span>
            </div>
          </div>

          {/* <div className="current-focus-card">
            <span className="focus-kicker">Currently working on</span>
            <p className="focus-text">
              Building cleaner React interfaces, tightening responsive layouts, and practicing backend integration patterns.
            </p>
            <div className="chip-row">
              <span className="chip">React UI</span>
              <span className="chip">Responsive Layouts</span>
              <span className="chip">Backend Integration</span>
            </div>
          </div> */}

          <div className="btn-container">
            <a href={resume} download className="download-btn">
              Download Resume
            </a>
            <Link to="/projects" className="download-btn secondary-btn">
              View Projects
            </Link>
          </div>
        </div>

        <div className="right hero-image-wrap">
          <div className="hero-portrait-frame">
          <img
            src={pro1}
            alt="profile"
            onClick={handleClick}
            className={`profile-full ${zoomed ? "zoomed" : ""}`}
          />
          </div>
        </div>

      </div>

      <Details />
      </div>
      {zoomed && (
        <div className="overlay" onClick={() => setZoomed(false)}>
          <div className="image-lightbox" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setZoomed(false)}
              aria-label="Close image preview"
            >
              ×
            </button>
            <img src={pro1} alt="profile enlarged" className="lightbox-image" />
          </div>
        </div>
      )}
    </>
  );
}