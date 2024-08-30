import { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Navcare from "./pages/Navcare";
import Newsbear from "./pages/Newsbear";
import Interac from "./pages/Interac";
import ArtProjects from "./pages/ArtProjects";
import NoPage from "./pages/NoPage";

export default function App() {
    
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="navcare" element={<Navcare />}/>
            <Route path="newsbear" element={<Newsbear />}/>
            <Route path="interac" element={<Interac />}/>
            <Route path="art" element={<ArtProjects />}/>
            <Route path="*" element={<NoPage />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
