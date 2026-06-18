import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="section">

      <h1 className="title">Contact</h1>
      <p className="subtitle">Reach me directly or through the profiles below.</p>

      <div className="contact-grid">
        <a className="contact-card" href="mailto:tamilselvanr2803@gmail.com">
          <span className="contact-label">Email</span>
          <div className="contact-line">
            <MdEmail className="contact-icon" />
            <span className="contact-value">tamilselvanr2803@gmail.com</span>
          </div>
        </a>

        <a className="contact-card" href="tel:7092180641">
          <span className="contact-label">Phone</span>
          <div className="contact-line">
            <ImPhone className="contact-icon" />
            <span className="contact-value">7092180641</span>
          </div>
        </a>

        <a className="contact-card" href="https://in.linkedin.com/in/tamilselvanr05" target="_blank" rel="noreferrer">
          <span className="contact-label">LinkedIn</span>
          <div className="contact-line">
            <FaLinkedin className="contact-icon" />
            <span className="contact-value">View profile</span>
          </div>
        </a>

        <a className="contact-card" href="https://www.geeksforgeeks.org/profile/tamilselvan1104c?from=explore" target="_blank" rel="noreferrer">
          <span className="contact-label">GeeksforGeeks</span>
          <div className="contact-line">
            <FaExternalLinkAlt className="contact-icon" />
            <span className="contact-value">Open GFG profile</span>
          </div>
        </a>

        <a className="contact-card" href="https://leetcode.com/u/Tamilselvan2803/" target="_blank" rel="noreferrer">
          <span className="contact-label">LeetCode</span>
          <div className="contact-line">
            <FaExternalLinkAlt className="contact-icon" />
            <span className="contact-value">Open LeetCode profile</span>
          </div>
        </a>
      </div>
    </div>
  );
}