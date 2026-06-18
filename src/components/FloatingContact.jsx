import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import "./FloatingContact.css";

export default function FloatingContact() {
  return (
    <Link className="floating-contact" to="/contact" aria-label="Open contact page">
      <MdEmail />
      <span>Contact me</span>
    </Link>
  );
}