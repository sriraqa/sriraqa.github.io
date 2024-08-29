import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

import { motion } from "framer-motion";

type Props = {
  handleDrawerToggle: () => void;
}

export default function Drawer({ handleDrawerToggle }: Props) {
  return (
    <motion.div 
      key="drawer" 
      className="p-8 h-full w-full text-right flex flex-col items-end space-y-4 bg-background text-body"
    >
      <button onClick={() => handleDrawerToggle()}>
        <IoClose size={24} />
      </button>

      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
        transition= {{
          x: { type: "spring", bounce: 0, duration: 0.7 },
        }}
        className="flex flex-col space-y-8"
      >
        <NavLink to="/" onClick={() => handleDrawerToggle()} className={({ isActive }) =>
          (isActive ? "menu-item-active" : "menu-item")
        }>Home</NavLink>
        <NavLink to="/#portfolio" onClick={() => handleDrawerToggle()} className="menu-item">Portfolio</NavLink>
        <NavLink to="/about" onClick={() => handleDrawerToggle()} className={({ isActive }) =>
          (isActive ? "menu-item-active" : "menu-item")
        }>About</NavLink>
        <a className="menu-item" onClick={() => handleDrawerToggle()} href="">Resume</a>
      </motion.div>
    </motion.div>
  )
};