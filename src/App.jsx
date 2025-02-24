import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Main from "./Pages/Main";
import Project from "./Pages/Project";
import Tools from "./Pages/Tools";
import About from "./Pages/About";
import ProjectTemp from "./Components/ProjectTemp";
import ScrollToTop from "./Components/ScrollToTop";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
          <Route path="tools" element={<Tools />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/project/:name" element={<ProjectTemp />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
};

export default App;
