import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaMobileAlt, FaNetworkWired, FaVial, FaBug } from "react-icons/fa";
import { SiJavascript, SiExpress, SiSpringboot, SiFlask, SiMongodb, SiPostgresql, SiDatabricks } from "react-icons/si";

const skillIcons = {
  "React": <FaReact style={{ color: "#61dafb" }} />,
  "JavaScript": <SiJavascript style={{ color: "#f7df1e" }} />,
  "Responsive Design": <FaMobileAlt style={{ color: "#2dd4bf" }} />,
  "Node.js(Express.js)": <SiExpress style={{ color: "#a8b8c8" }} />,
  "Python(Flask)": <SiFlask style={{ color: "#3776AB" }} />,
  "Java(Spring Boot)": <SiSpringboot style={{ color: "#6db33f" }} />,
  "C#(ASP.NET Core)": <SiDatabricks style={{ color: "#a4b8cb" }} />,
  "MongoDB": <SiMongodb style={{ color: "#47A248" }} />,
  "SQL": <SiDatabricks style={{ color: "#a4b8cb" }} />,
  "PostgreSQL": <SiPostgresql style={{ color: "#336791" }} />,
  "Git": <FaGitAlt style={{ color: "#f34f29" }} />,
  "REST APIs": <FaNetworkWired style={{ color: "#2dd4bf" }} />,
  "Testing": <FaVial style={{ color: "#a855f7" }} />,
  "Debugging": <FaBug style={{ color: "#ef4444" }} />,
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "Responsive Design"],
    },
    {
      title: "Backend",
      skills: ["Node.js(Express.js)", "Python(Flask)", "Java(Spring Boot)", "C#(ASP.NET Core)"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL", "PostgreSQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "REST APIs", "Testing", "Debugging"],
    },
  ];
  const [flippedIndex, setFlippedIndex] = useState(null);
  const certificates = [
    {
      name: "AWS Certification",
      image: "/Aws.jpg",
    },
    {
      name: "Cisco Certification",
      image: "/cisco.jpg",
    },
    {
      name: "Hackathon Certificate",
      image: "/hack.jpg",
    },
    {
      name: "Internship Certificate 1",
      image: "/intern1.jpg",
    },
    {
      name: "Internship Certificate 2",
      image: "/intern2.jpg",
    },
  ];
  const handleClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };
  return (
    <>
      <motion.div {...fadeUp}>
        <section className="section">
          <h1 className="title">Skills</h1>
          <p className="subtitle">A quick scan of the stack I work with across frontend, backend, and database layers.</p>
          <div className="skills-container">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-card card">
                <h2 className="skill-group-title">{group.title}</h2>
                {group.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <span className="skill-item-icon">
                      {skillIcons[skill]}
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </motion.div>

      <motion.div {...fadeUp}>
        <section className="section">
          <h1 className="title">Certification</h1>
          <p className="subtitle">Click a certificate name to flip the card and reveal the certificate image.</p>
          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <button
                key={certificate.name}
                type="button"
                className={`certificate-card ${flippedIndex === index ? "flipped" : ""}`}
                onClick={() => handleClick(index)}
                aria-pressed={flippedIndex === index}
              >
                <div className="certificate-card-inner">
                  <div className="certificate-face certificate-front">
                    <span className="certificate-kicker">Certificate</span>
                    <h2 className="certificate-name">{certificate.name}</h2>
                    <span className="certificate-action">Click name to view</span>
                  </div>
                  <div className="certificate-face certificate-back">
                    <img src={certificate.image} alt={certificate.name} className="certificate-image" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </motion.div>
    </>
  );
}
