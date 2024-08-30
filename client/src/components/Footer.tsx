import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

import "../css/Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <p style={{ width:"124px" }}>2024 Sarah Qiao</p>
      <div style={{ width:"124px", textAlign:"right", display:"flex", flexDirection:"row-reverse", gap:"14px" }}>
        <span>
          <a className="icon" href="mailto: syqiao@uwaterloo.ca" target="_blank">
            <FaPaperPlane />
          </a>
        </span>
        <span>
          <a className="icon" href="https://github.com/sriraqa" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a className="icon" href="https://www.linkedin.com/in/sarah-qiao/" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
      </div>
    </footer>
  )
};