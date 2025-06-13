import { NavLink, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { IoClose } from "react-icons/io5";

import { motion } from "framer-motion";

import Scribble from "./Scribble";

type Props = {
  handleDrawerToggle: () => void;
};

export default function Drawer({ handleDrawerToggle }: Props) {
  const location = useLocation();

  return (
    <motion.div
      key="drawer"
      className="p-8 h-full w-full flex flex-col space-y-4 bg-background text-body"
    >
      <button onClick={() => handleDrawerToggle()}>
        <IoClose size={24} />
      </button>

      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
        transition={{
          x: { type: "spring", bounce: 0, duration: 0.7 },
        }}
        className="flex flex-col space-y-8 items-end"
      >
        <NavLink
          to="/"
          onClick={() => handleDrawerToggle()}
          className="menu-item"
        >
          {location.pathname === "/" ? <Scribble>Home</Scribble> : <p>Home</p>}
        </NavLink>
        <NavHashLink
          to="/#portfolio"
          onClick={() => handleDrawerToggle()}
          className="menu-item"
        >
          Portfolio
        </NavHashLink>
        <NavLink
          to="/about"
          onClick={() => handleDrawerToggle()}
          className="menu-item"
        >
          {location.pathname === "/about" ? (
            <Scribble>About</Scribble>
          ) : (
            <p>About</p>
          )}
        </NavLink>
        <a className="menu-item" onClick={() => handleDrawerToggle()} href="">
          Resume
        </a>
      </motion.div>
    </motion.div>
  );
}
