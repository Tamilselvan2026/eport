import { NavLink } from "react-router-dom";

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
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "") }>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}