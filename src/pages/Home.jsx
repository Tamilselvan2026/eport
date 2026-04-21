import pro1 from "../assets/vite.svg";
import { useEffect, useState } from "react";
import resume from "../assets/Resume.pdf";
import ScrollTop from "../components/ScrollTop";
import Details from "./Details";
export default function Home() {
  const [zoomed, setZoomed] = useState(false);

  const handleClick = () => {
    setZoomed(!zoomed);
  };
  
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <>
    <div>
      <div className="section two-col">
        {/* RIGHT SIDE (IMAGE) */}
        <div className="right">
          <img
            src={pro1}
            alt="profile"
            onClick={handleClick}
            className={`profile-full ${zoomed ? "zoomed" : ""}`}
          />
        </div>
        
        {/* LEFT SIDE (TEXT) */}
        <div className="left">
          <h1 className="title">Hello,</h1>
          <h1 style={{ color: "#3852B4" }}>I'm Tamilselvan R</h1>

          <p className="title">
            Full Stack Development<br />
            Software Engineering Enthusiast
          </p>

          <p className="subtitle">
            I am a passionate computer science engineering student focused on backend development and software engineering roles.
            I enjoy building efficient, scalable software solutions and constantly improving my skills in programming, problem-solving, and software design.
          </p>
          <div className="box">
            <h3>Area of Interest</h3>
            <ul className="list">
              <li>Full Stack Development</li>
              <li>UI/UX Design</li>
              <li>Database Design</li>
              <li>Cloud Computing</li>
              <li>DevOps</li>
            </ul>
          </div>
      <div className="btn-container" >
          <a href={resume} download className="download-btn">
            Download Resume
          </a>
      </div>
        </div>

      </div>
      <Details/>
      </div>
      {/* Overlay */}
      {zoomed && <div className="overlay" onClick={() => setZoomed(false)} />}
    </>
  );
}