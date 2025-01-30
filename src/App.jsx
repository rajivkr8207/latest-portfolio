import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Main from "./Pages/Main";
import Project from "./Pages/Project";
import Tools from "./Pages/Tools";
import { ToastContainer } from "react-toastify";
import About from "./Pages/About";
import ProjectTemp from "./Components/ProjectTemp";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
      <ScrollToTop /> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/project/:name" element={<ProjectTemp/>} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
