import { useEffect } from "react";

import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Navcare from "./pages/Navcare";
import Newsbear from "./pages/Newsbear";
import Interac from "./pages/Interac";
import ArtProjects from "./pages/ArtProjects";
import NoPage from "./pages/NoPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'navcare', element: <Navcare /> },
      // { path: 'Newsbear', element: <Newsbear /> },
      { path: 'interac', element: <Interac /> },
      { path: 'art', element: <ArtProjects /> },
      { path: '*', element: <NoPage /> },
    ]
  }
]);

export default function App() { 
  return <RouterProvider router={router} />
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
