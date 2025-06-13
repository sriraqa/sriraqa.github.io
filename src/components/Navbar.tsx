import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { AnimatePresence, motion } from "framer-motion";

import Drawer from "./Drawer";
import Scribble from "./Scribble";

import { FaBars } from "react-icons/fa6";
import logo from "../assets/logo.png";
import "../css/Navbar.css";

// const sequence = [
//   ["ul", { opacity: 1 }, { duration: 0.5 }],
//   ["li", { x: [-100, 0] }, { delay: stagger(0.1) }]
// ]

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState<Boolean>(false);
  const location = useLocation();

  const toggleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <nav className={`navbar ${openDrawer ? "h-full" : ""}`}>
      <AnimatePresence>
        {openDrawer && (
          <motion.div
            className="absolute z-20 h-full w-full text-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.3 },
            }}
          >
            <Drawer handleDrawerToggle={() => toggleDrawer()} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="navbar-container">
        <NavHashLink to="/#top" className="logo-text">
          <img className="logo" src={logo} alt="Logo" />
          Sarah Qiao
        </NavHashLink>

        <button onClick={() => toggleDrawer()} className="sm:hidden">
          <FaBars size={20} />
        </button>
        <div className="menu hidden sm:flex">
          <NavHashLink to="/#top" className="menu-item">
            {location.pathname === "/" ? (
              <Scribble>Home</Scribble>
            ) : (
              <p>Home</p>
            )}
          </NavHashLink>
          <NavHashLink to="/#portfolio" className="menu-item">
            Portfolio
          </NavHashLink>
          <NavHashLink to="/about#top" className="menu-item">
            {location.pathname === "/about" ? (
              <Scribble>About</Scribble>
            ) : (
              <p>About</p>
            )}
          </NavHashLink>
          <a
            className="menu-item"
            href="https://drive.google.com/file/d/1wnrT_kSmfDJye9maJ7mnKhbwSpmS2wvv/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
