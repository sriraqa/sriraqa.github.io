import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import "../css/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-text">
        <img className="logo" src={logo} alt="Logo"/>
        Sarah Qiao
      </div>
      <div className="menu">
      <NavLink to="/" className={({ isActive }) =>
          (isActive ? "menu-item-active" : "menu-item")
        }>Home</NavLink>
        <NavLink to="/#portfolio" className="menu-item">Portfolio</NavLink>
        <NavLink to="/about" className={({ isActive }) =>
          (isActive ? "menu-item-active" : "menu-item")
        }>About</NavLink>
        <a className="menu-item" href="">Resume</a>
      </div>
    </nav>
  )
};