import { useState, useEffect } from "react";

import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import '../App.css';
import BoxOverlay from "../components/BoxOverlay";

const Layout = () => {
    const [showOverlay, setShowOverlay] = useState<boolean>(true);
    const location = useLocation();

    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const toggleOverlay = async () => {
        await timeout(100);
        if (showOverlay) {
            setShowOverlay(false);
        }
    }

    useEffect(() => {
        if (showOverlay) {
            toggleOverlay();
        }
    }, [showOverlay]);

    useEffect(() => {
        setShowOverlay(true);
    }, [location]);

    return (
        <div className="App">
            {/* <AnimatePresence>
                {showOverlay &&
                    <BoxOverlay />
                }
            </AnimatePresence> */}
            <Navbar />
            <div className="body">
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

export default Layout;