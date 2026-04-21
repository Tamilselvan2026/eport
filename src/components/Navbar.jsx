import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const glowRef = useRef(null);

  useEffect(() => {
    const nav = document.querySelector(".navbackgroud");

    const move = (e) => {
      const rect = nav.getBoundingClientRect();

      glowRef.current.style.left = e.clientX - rect.left + "px";
      glowRef.current.style.top = e.clientY - rect.top + "px";
    };

    nav.addEventListener("mousemove", move);

    return () => nav.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="navbackgroud">

      {/* Glow Element */}
      <div ref={glowRef} className="cursor-glow-nav"></div>

      <div className="navbar">
        <h1 className="logo">Portfolio</h1>
        <div className="nav-links">
          <Link to="/">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}