import NavBar from "./components/navbar";
import ErrorPage from "./pages/404";
import HomePage from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <div className="flex min-h-screen items-center text-white flex-col justify-between">
      <NavBar currentPage={location.pathname} />{" "}
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>{" "}
      <div></div>
    </div>
  );
}

export default App;
