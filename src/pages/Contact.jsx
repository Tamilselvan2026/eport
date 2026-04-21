import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import ScrollTop from "../components/ScrollTop";

export default function Contact() {
  return (
    <div className="section">

      <h1 className="title">Contact</h1>

      <div className="item" style={{fontSize:"20px",paddingLeft:"10px"}}>
        <p><MdEmail /> tamilselvanr2005@gmail.com</p>
        <p><ImPhone />  +91 XXXXXXXXXX</p>
        <a style={{fontSize:"20px"}} href="https://in.linkedin.com/in/tamilselvanr05"><FaLinkedin /> LinkedIn</a>
      </div>
    </div>
  );
}