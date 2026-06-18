export default function Projects() {
  const projects = [
    {
      title: "Resume Checker Web App",
      summary:
        "A resume review app that extracts text and highlights grammar or logic issues so users can improve applications faster.",
      focus: "Document parsing, feedback logic, and a guided review flow.",
      tech: ["Python", "Flask", "NLP", "Streamlit"],
      link: "https://github.com/Tamilselvan2026/Resumeschecker",
    },
    {
      title: "E-commerce for unique gifts and products",
      summary:
        "A storefront for unique gifts with browsing, product discovery, and a catalog structure that supports a simple shopping flow.",
      focus: "Catalog browsing, product discovery, and storefront-style navigation.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Tamilselvan2026/giftshope-commerce",
    },
    {
      title: "Student Module Management System",
      summary:
        "A student management system for tracking records, grades, and academic activity in one place.",
      focus: "CRUD management, grade tracking, and academic data handling.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
      link: "https://github.com/Tamilselvan2026/Tnsif_TamilselvanR",
    },
  ];

  return (
    <div className="section">
      <h1 className="title">Projects</h1><br></br>
      {/* <p className="subtitle">Selected builds that show how I approach UI, backend logic, and deployment-friendly structure.</p> */}

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-top">
              {/* <span className="project-kicker">Featured project</span> */}
              <h3>{project.title}</h3>
            </div>

            <p className="project-summary">{project.summary}</p>
            <p className="project-note">Focus: {project.focus}</p>

            <div className="chip-row">
              {project.tech.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>

            <a className="project-link project-button" href={project.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}