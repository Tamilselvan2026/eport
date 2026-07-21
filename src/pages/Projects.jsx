import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const projects = [
  {
    title: "Resume Checker Web App",
    summary:
      "A resume review app that extracts text and highlights grammar or logic issues so users can improve applications faster.",
    impact:
      "Helps users catch grammar and logic issues in resumes faster — streamlining the application review process.",
    tech: ["Python", "Flask", "NLP", "Streamlit"],
    github: "https://github.com/Tamilselvan2026/Resumeschecker",
    demo: "",
    gradient: "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
  },
  {
    title: "E-commerce for Unique Gifts & Products",
    summary:
      "A storefront for unique gifts with browsing, product discovery, and a catalog structure that supports a simple shopping flow.",
    impact:
      "Full-stack e-commerce platform with catalog browsing and seamless product discovery experience.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Tamilselvan2026/giftshope-commerce",
    demo: "",
    gradient: "linear-gradient(135deg, #0f172a, #2d1b69, #0f172a)",
  },
  {
    title: "Student Module Management System",
    summary:
      "A student management system for tracking records, grades, and academic activity in one place.",
    impact:
      "Centralized academic data management system for tracking student records, grades, and activity.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
    github: "https://github.com/Tamilselvan2026/Tnsif_TamilselvanR",
    demo: "",
    gradient: "linear-gradient(135deg, #0f172a, #1a3a2a, #0f172a)",
  },
];

export default function Projects() {
  return (
    <motion.div {...fadeUp}>
      <section className="section">
        <h1 className="title">Projects</h1>
        <p className="subtitle">Selected builds that show how I approach UI, backend logic, and full-stack architecture.</p>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card-thumb" style={{ background: project.gradient }}>
                {project.screenshot ? (
                  <img src={project.screenshot} alt={`${project.title} screenshot`} />
                ) : (
                  <span aria-hidden="true">Project screenshot</span>
                )}
              </div>

              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-impact">{project.impact}</p>

              <div className="chip-row">
                {project.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a className="project-action-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`}>
                  <FaGithub /> GitHub
                </a>
                {project.demo ? (
                  <a className="project-action-link project-action-link--primary" href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ) : (
                  <span className="project-action-link" style={{ opacity: 0.5, cursor: "not-allowed" }} aria-label="Live demo not yet available">
                    <FaExternalLinkAlt /> Live Demo
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
