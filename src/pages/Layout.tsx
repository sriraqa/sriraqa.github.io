import { useState, useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../App.css";

const Layout = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const location = useLocation();

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const toggleOverlay = async () => {
    await timeout(100);
    if (showOverlay) {
      setShowOverlay(false);
    }
  };

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
      <Navbar />
      <div className="body">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
