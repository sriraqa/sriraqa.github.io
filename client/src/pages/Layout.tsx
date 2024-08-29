import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import '../App.css';

const Layout = () => {
    return (
        <div className="App">
            <motion.div
                initial={{ x: "-100%", y: "-100%" }}
                animate={{ x: "100%", y: "100%" }}
                transition= {{
                    x: { type: "spring", bounce: 0, duration: 0.7 },
                    y: { type: "spring", bounce: 0, duration: 0.7 },
                }}
            >
                
            </motion.div>
            <Navbar />
            <div className="body">
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default Layout;