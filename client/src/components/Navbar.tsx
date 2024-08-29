import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Drawer from "./Drawer";

import { FaBars } from "react-icons/fa6";
import logo from "../assets/logo.png";
import "../css/Navbar.css";

// const sequence = [
//   ["ul", { opacity: 1 }, { duration: 0.5 }],
//   ["li", { x: [-100, 0] }, { delay: stagger(0.1) }]
// ]

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState<Boolean>(false);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <nav className={`navbar ${openDrawer ? "h-full" : ""}`}>
      <AnimatePresence>
        {openDrawer && (
          <motion.div className="absolute z-10 h-full w-full text-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.3 }
            }}
          >
            <Drawer handleDrawerToggle={() => toggleDrawer()} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="navbar-container">
        <NavLink to="/" className="logo-text">
          <img className="logo" src={logo} alt="Logo"/>
          Sarah Qiao
        </NavLink>

        <button 
          onClick={() => toggleDrawer()}
          className="sm:hidden"
        >
          <FaBars size={20} />
        </button>
        <div className="menu hidden sm:flex">
          <NavLink to="/" className={({ isActive }) =>
            (isActive ? "menu-item-active" : "menu-item")
          }>Home</NavLink>
          <NavLink to="/#portfolio" className="menu-item">Portfolio</NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            (isActive ? "menu-item-active" : "menu-item")
          }>About</NavLink>
          <a className="menu-item" href="">Resume</a>
        </div>
      </div>
    </nav>
  )
};