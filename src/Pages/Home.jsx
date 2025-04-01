import React, { useEffect } from "react";
import Profile from "../Components/Profile";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Collaborate from "../Components/Collaborate";
import Projectcomponents from "../Components/Projectcomponents";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const Home = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Smooth scrolling to top
  }, [pathname]); // Runs when the page (pathname) changes

  const fadeUpAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 10 }

    },
  };

  return (
    <>
      <div className="lg:hidden flex z-20">
        <Profile />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeUpAnimation}
        className="md:px-auto z-20"
      >
        <div>
          <h1 className="lg:text-5xl text-4xl font-bold lg:text-start text-center lg:mx-0 mx-3 font-[Playfair-Display]">
            Hello, I'm <br className="lg:hidden md:hidden block" />
            <span className="text-purple-500 lg:text-6xl text-4xl">
              Rajiv Kumar
            </span>
            <br />
          </h1>

          <div className="flex lg:flex-row md:flex-row flex-col lg:justify-start justify-center gap-2 lg:text-4xl text-3xl font-[Playfair-Display] text-center font-bold lg:mx-0 mx-3 mb-5">
            <span>And I'm a </span>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "Fullstack Developer",
                1000,
              ]}
              speed={50}
              className="lg:text-4xl text-3xl text-purple-500 font-bold"
              repeat={Infinity}
            />
          </div>

          <p className="my-4 lg:text-lg text-sm lg:text-start text-center lg:mx-0 mx-3">
            Motivated full-stack developer with expertise in modern web
            technologies. Currently pursuing a degree at IITM....
          </p>

          <div className="flex flex-col gap-4 my-8">
            {/* Years of Experience Section */}
            <motion.div
              variants={fadeUpAnimation}
              className="flex items-center gap-6 lg:mx-0 mx-auto"
            >
              <p className="lg:text-lg text-base text-gray-400 flex items-center group">
                Years of Experience
                <FaArrowRightLong className="text-2xl text-gray-400 group-hover:text-purple-600 ml-3 group-hover:ml-5 transition-all duration-300" />
              </p>
              <h1 className="lg:text-4xl text-2xl font-bold text-white">
                Fresher
              </h1>
            </motion.div>

            {/* Projects Section */}
            <motion.div
              variants={fadeUpAnimation}
              className="flex items-center lg:justify-start justify-center gap-6"
            >
              <p className="lg:text-lg text-base text-gray-400 flex items-center group">
                Projects
                <FaArrowRightLong className="text-2xl text-gray-400 group-hover:text-purple-600 ml-3 group-hover:ml-5 transition-all duration-300" />
              </p>
              <h1 className="lg:text-4xl text-2xl font-bold text-white">+5</h1>
            </motion.div>
          </div>

          <div className="flex lg:justify-start justify-center items-center gap-6 my-4">
            <button
              onClick={() => {
                navigate("/about");
                window.scroll(0, 0);
              }}
              className="px-5 lg:py-3 py-2 bg-purple-600 hover:bg-purple-800 text-white rounded-lg text-lg"
            >
              Explore More
            </button>
            <button
              onClick={() => {
                navigate("/project");
                window.scroll(0, 0);
              }}
              className="text-xl capitalize group flex items-center justify-center"
            >
              My Work
              <FaArrowRightLong className="text-xl group-hover:text-purple-500 ml-3 group-hover:ml-5 transition-all" />
            </button>
          </div>
        </div>
      </motion.div>

      <Projectcomponents />
      <Collaborate />
    </>
  );
};

export default Home;
