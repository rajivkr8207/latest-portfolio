import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import AiChat from "./Components/AiChat";
import { lazy, memo, Suspense, useEffect, useRef, useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ReactLoading from "react-loading";
const Contact = lazy(() => import("./Pages/Contact"));
const Main = lazy(() => import("./Pages/Main"));
const Project = lazy(() => import("./Pages/Project"));
const Tools = lazy(() => import("./Pages/Tools"));
const About = lazy(() => import("./Pages/About"));
const ProjectTemp = lazy(() => import("./Components/ProjectTemp"));
const App = () => {
  const [aichat, setAichat] = useState(false);
  const cursorRef = useRef(null);

  const Loading = memo(() => (
    <div className="flex justify-center items-center min-h-screen">
      <ReactLoading type="bars" color="purple" height={250} width={300} />
    </div>
  ));

  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <div className="blob" ref={cursorRef}></div>
      {aichat && <AiChat setAichat={setAichat} />}

      <Navbar setAichat={setAichat} />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />

          <Route
            path="contact"
            element={
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="project"
            element={
              <Suspense fallback={<Loading />}>
                <Project />
              </Suspense>
            }
          />
          <Route
            path="tools"
            element={
              <Suspense fallback={<Loading />}>
                <Tools />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/project/:name"
          element={
            <Suspense fallback={<Loading />}>
              <ProjectTemp />
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} />
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

      <motion.div
        initial={{ y: 100, scale: 0.5, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed lg:right-10 right-6 lg:bottom-5 bottom-20 z-40"
      >
        <button
          onClick={() => {
            setAichat(!aichat);
          }}
          className="flex flex-col bg-purple-600 hover:bg-purple-800 text-white focus:bg-purple-800 rounded-full p-3 relative"
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
