import pro1 from "../assets/gokul.jpg";
import { useState } from "react";
import resume from "../assets/Resume.pdf";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export default function Home() {
  const [zoomed, setZoomed] = useState(false);

  const handleClick = () => {
    setZoomed(!zoomed);
  };

  return (
    <>
      <motion.div {...fadeUp}>
        <div className="section two-col hero-panel">
          <div className="left hero-copy">
            <span className="eyebrow">Full Stack Developer</span>
            <h1 className="hero-title">Tamilselvan R</h1>

            <p className="hero-subtitle">
              Full Stack Developer skilled in crafting clean UIs, building reliable APIs, and delivering practical, scalable product solutions. Passionate about turning ideas into user‑friendly applications with strong frontend and backend expertise.
            </p>

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
                alt="Tamilselvan R portrait"
                onClick={handleClick}
                className={`profile-full ${zoomed ? "zoomed" : ""}`}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div {...fadeUp}>
        <section className="section">
          <div className="about-story-card">
            <h2>My Story</h2>
            <p>
              I'm a Full Stack Developer who enjoys turning ideas into practical, user-friendly applications. I focus on understanding the problem first, then building clean solutions that actually ship — whether it's a responsive React frontend, a reliable Node.js API, or a full-stack data pipeline.
            </p>
            <p>
              I'm looking for a role where I can contribute to real products, work with a strong team, and keep growing my craft. What sets me apart is a problem-solver's mindset combined with the ability to pick up new tools quickly — I don't wait to be told what to learn, I figure out what the project needs and go after it.
            </p>
          </div>
        </section>
      </motion.div>

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
            <img src={pro1} alt="Tamilselvan R portrait enlarged" className="lightbox-image" />
          </div>
        </div>
      )}
    </>
  );
}
