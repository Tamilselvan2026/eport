import certificate from '../assets/hero.png';
import ScrollTop from "../components/ScrollTop";
import { useState } from "react";
export default function Skills() {
  const skillSet = ["Python", "Java","Springboot/Flask", "React", "Node.js", "Express.js", "MongoDB", "SQL", "Git"];
  const [zoomedIndex, setZoomedIndex] = useState(null);
  const images = [certificate, certificate, certificate, certificate, certificate, certificate];
  const handleClick = (index) => {
  setZoomedIndex(zoomedIndex === index ? null : index);
};
  return (
    <>
    <div className="section">
      <h1 className="title">Skills</h1>
      <div className="skills-container ">
        {Array.from({ length: Math.ceil(skillSet.length / 3) }).map((_, i) => (
          <div key={i} className="skill-card card">
            {skillSet.slice(i * 3, i * 3 + 3).map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}

          </div>

        ))}
      </div>

    </div>
    <div className="section">
      <h1 className="title">Certification</h1>
      <div className='certificate'>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Certification"
            onClick={() => handleClick(index)}
            className={zoomedIndex === index ? "zoomed" : ""}
          />
        ))}
   
      </div>
     
    </div>
  </>
  );
}