import { TypeAnimation } from "react-type-animation";
import { FaArrowRightLong } from "react-icons/fa6";
import Collaborate from "../Components/Collaborate";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import resume from '../assets/Resume(Rajiv).pdf'

const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Smooth scrolling to top
  }, [pathname]); // Runs when the page (pathname) changes

  const allabout = [
    {
      title: "Educational",
      desc: `I'm currently in my second year at IITM, where I explore the latest technologies and trends in web development.`,
    },
    {
      title: "Skills and Expertise",
      desc: "I have hands-on experience in creating responsive websites using Django and modern web technologies. I also enjoy solving problems with Redis and WebSocket for real-time functionality.",
    },
    {
      title: "Goals and Vision",
      desc: "My goal is to create impactful web solutions that solve real-world problems and to contribute to innovative projects as I grow into a professional developer.",
    },
    {
      title: "Hobbies",
      desc: "In my free time, I enjoy learning new technologies from YouTube, Udemy, and documentation. I also love collaborating on projects that push me to think outside the box.",
    },
  ];

  const handledownload = ()=>{
    window.open(resume, "_blank")
  }
  // Animation for fade-up effect
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 10 }

      // transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.3 },
    },
  };
  const fadedownAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 10 }

      // transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div className="md:px-auto">
        {/* Header Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          variants={fadedownAnimation}
          className="text-center lg:text-start"
        >
          <h1 className="lg:text-5xl text-4xl font-bold">
            Hello, I'm <br className="lg:hidden md:hidden block" />
            <span className="text-purple-500 lg:text-6xl text-4xl">
              Rajiv Kumar
            </span>
            <br />
          </h1>
          <div className="flex lg:flex-row md:flex-row flex-col lg:justify-start justify-center gap-2 lg:text-4xl text-3xl font-bold my-5">
            <span>And I'm a</span>
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
              className="text-purple-500"
              repeat={Infinity}
            />
          </div>
          <p className="my-4 lg:text-lg text-sm">
            Motivated{" "}
            <span className="text-purple-400 font-semibold">
              full-stack developer
            </span>{" "}
            with expertise in modern web technologies. Currently pursuing a
            degree at IITM, I am passionate about building scalable,
            user-friendly applications and continuously learning to enhance my
            skills through innovative projects like the Article Management
            System.
          </p>
        </motion.div>

        {/* Experience & Projects Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          variants={fadeUp}
          className="flex flex-col gap-4 my-8"
        >
          {/* Years of Experience */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-6 mx-auto lg:mx-0"
          >
            <p className="lg:text-lg text-base text-gray-400 flex items-center group">
              Years of Experience
              <FaArrowRightLong className="text-2xl text-gray-400 ml-3 transition-all group-hover:text-purple-600 group-hover:ml-5 duration-300" />
            </p>
            <h1 className="lg:text-4xl text-2xl font-bold text-white">
              Fresher
            </h1>
          </motion.div>

          {/* Projects */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-6 mx-auto lg:mx-0"
          >
            <p className="lg:text-lg text-base text-gray-400 flex items-center group">
              Projects
              <FaArrowRightLong className="text-2xl text-gray-400 ml-3 transition-all group-hover:text-purple-600 group-hover:ml-5 duration-300" />
            </p>
            <h1 className="lg:text-4xl text-2xl font-bold text-white">10+</h1>
          </motion.div>
          <motion.div
          onClick={handledownload}
            variants={fadeUp}
            className="flex items-center gap-6 mx-auto lg:mx-0"
          >
            <button className="px-5 py-3 rounded-lg bg-purple-600 hover:bg-purple-800 text-white lg:flex justify-center lg:mx-3 mx-auto cursor-pointer">
              Download Resume
            </button>
          </motion.div>
        </motion.div>

        {/* About Sections */}
        {allabout.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            variants={fadeUp}
            className="lg:w-full md:w-[30rem] w-[98vw] group mx-auto p-5 bg-[#2B2C2D]/50 rounded-3xl flex flex-col my-5 hover:bg-purple-600 transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-center mb-2">
              <h1 className="lg:text-4xl text-2xl font-bold text-purple-500 group-hover:text-white">{item.title}</h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="hidden group-hover:bg-white lg:block bg-purple-500 p-5 rounded-full transition-all duration-300"
              >
                <FaArrowRightLong className="text-2xl -rotate-45 group-hover:text-purple-500 text-white transition-all duration-300" />
              </motion.button>
            </div>
            <p className="lg:text-lg text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Collaborate Section */}
      <Collaborate />
    </>
  );
};

export default About;
