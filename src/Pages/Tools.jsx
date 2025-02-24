import  { useEffect } from "react";
import Collaborate from "../Components/Collaborate";
import Profile from "../Components/Profile";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Tools = () => {
  const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0); // Smooth scrolling to top
    }, [pathname]); // Runs when the page (pathname) changes
  
  const tools = [
    {
      name: "Programming Languages",
      tool: ["Python", "JavaScript", "typescript(Basic)"],
    },
    {
      name: "Frameworks and Libraries",
      tool: ["Django", "Tailwind CSS", "React JS"],
    },
    {
      name: "Database Technologies",
      tool: ["PostgreSQL", "SQLite"],
    },
    {
      name: "Development Tools",
      tool: ["Git & GitHub", "VS Code",  "Figma","Postman"]
    },
    {
      name: "other technologies",
      tool: ["Framer motion","Redis", "WebSocket(basic)", "docker(basic)"],
    },
  ];

  const fadeUpAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false}}
          variants={fadeUpAnimation}
          className="lg:text-5xl text-4xl font-[Playfair-Display] font-semibold lg:text-start text-center"
        >
          Building with These <span className="text-purple-500">Skils and Tools</span>
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: false }}
          className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 my-5"
        >
          {tools.map((item, index) => (
            <motion.div
              variants={fadeUpAnimation}
              key={index}
              className="shadow-md p-4 flex flex-col mx-2 gap-3 bg-[#2B2C2D]/50 rounded-3xl hover:bg-[#8F4CEC] transition-all duration-300 group"
            >
              <h1 className="lg:text-3xl text-2xl font-[Playfair-Display font-semibold lg:text-start text-center capitalize">
                {item.name}
              </h1>
              <ul className="flex flex-col text-purple-500 group-hover:text-white font-semibold list-disc transition-all duration-300 text-lg capitalize ml-7">
                {item.tool.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="lg:hidden flex">
        <Profile />
      </div>
      <Collaborate />
    </>
  );
};

export default Tools;
