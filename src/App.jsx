import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import AiChat from "./Components/AiChat";
import { lazy, Suspense, useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import Error from "./Components/Error";
// import Loading from "react-loading";
import ReactLoading from "react-loading";
const Navbar = lazy(() => import("./Components/Navbar"));
const Home = lazy(() => import("./Pages/Home"));
const Contact = lazy(() => import("./Pages/Contact"));
const Main = lazy(() => import("./Pages/Main"));
const Project = lazy(() => import("./Pages/Project"));
const Tools = lazy(() => import("./Pages/Tools"));
const About = lazy(() => import("./Pages/About"));
const ProjectTemp = lazy(() => import("./Components/ProjectTemp"));

const App = () => {
  const [aichat, setAichat] = useState(false);
  return (
    <Router>
      <ScrollToTop />
      <Navbar setAichat={setAichat} />
      {aichat && <AiChat setAichat={setAichat} />}
      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <ReactLoading
              type={"bars"}
              color={"purple"}
              height={667}
              width={375}
            />
          </div>
        }
      >
       
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="project" element={<Project />} />
            <Route path="tools" element={<Tools />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/project/:name" element={<ProjectTemp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
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
      <motion.div
        initial={{ y: 100, scale: 0.5, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed lg:right-10 right-6 lg:bottom-5 bottom-20 z-40"
      >
        <button
          onClick={() => setAichat(!aichat)}
          className="flex flex-col bg-purple-500 text-white focus:bg-purple-800 rounded-full p-3 relative"
        >
          <HiChatAlt2 className="lg:text-5xl text-3xl" />
          <p className="lg:text-[0.8rem] text-[0.6rem] absolute lg:top-5 top-4 z-50 text-purple-500 font-semibold lg:left-6 left-[1.1rem]">
            AI
          </p>
        </button>
      </motion.div>
    </Router>
  );
};

export default App;
