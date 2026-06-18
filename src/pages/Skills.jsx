import { useState } from "react";
export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "Responsive Design"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Python", "Java", "Spring Boot / Flask"],
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
    <div className="section">
      <h1 className="title">Skills</h1>
      <p className="subtitle">A quick scan of the stack I work with across frontend, backend, and database layers.</p>
      <div className="skills-container ">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-card card">
            <h2 className="skill-group-title">{group.title}</h2>
            {group.skills.map((skill) => (
              <div key={skill} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
    <div className="section">
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
     
    </div>
  </>
  );
}