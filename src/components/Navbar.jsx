import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="navbackgroud">
      <div className="navbar">
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "") }>
            About
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "") }>
            Skills
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "") }>
            Projects
          </NavLink>
          <NavLink to="/details" className={({ isActive }) => (isActive ? "active" : "") }>
            Experience
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "") }>
            Contact
          </NavLink>
        </div>
        <div className="nav-socials">
          <a href="https://github.com/Tamilselvan2026" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <FaGithub />
          </a>
          <a href="https://in.linkedin.com/in/tamilselvanr05" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <FaLinkedin />
          </a>
          <a href="mailto:tamilselvanr2803@gmail.com" aria-label="Send email">
            <MdEmail />
          </a>
        </div>
      </div>
    </div>
  );
}
