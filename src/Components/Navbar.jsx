import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";
import { FaFolder } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { BsPersonBoundingBox } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";

const Navbar = ({ setAichat }) => {
  const links = [
    { to: "/", text: "Home", icon: <IoHome className="mx-auto text-3xl" /> },
    {
      to: "/about",
      text: "About",
      icon: <BsPersonBoundingBox className="mx-auto text-3xl" />,
    },
    {
      to: "/project",
      text: "Project",
      icon: <FaFolder className="mx-auto text-3xl" />,
    },
    {
      to: "/tools",
      text: "Skils",
      icon: <FaTools className="mx-auto text-3xl " />,
    },
    {
      to: "/contact",
      text: "Contact",
      icon: <MdPermContactCalendar className="mx-auto text-3xl" />,
    },
  ];
  const fadeupanimation = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeupanimation}
        className="lg:flex fixed bottom-0 z-20 "
      >
        <nav className="flex justify-center items-center   w-[100vw]">
          <ul className="flex  border gap-5 lg:mb-2 rounded-2xl px-5 py-2 bg-black/30 backdrop-blur-lg lg:w-auto md:w-[40vw] w-[95vw] justify-between">
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    onClick={() => {
                      setAichat(false);
                    }}
                    to={item.to}
                    data-tooltip-id={item.text + index}
                    className={`bg-purple-500   
                              text-xl gap-3 text-white `}
                  >
                    <span
                      className={`lg:hover:bg-[#8D4AEA] leading-[0.6rem]  lg:p-2 p-1 flex-col text-white lg:rounded-xl rounded-lg flex lg:hover:scale-125  transition-all duration-300 `}
                    >
                      {item.icon}
                      <p className="text-[0.5rem] text-center mx-auto lg:hidden block">
                        {item.text}
                      </p>
                    </span>
                  </NavLink>
                  <Tooltip
                    id={item.text + index}
                    place="bottom"
                    content={item.text}
                    effect="solid"
                    className="lg:block hidden"
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.header>
    </>
  );
};

export default Navbar;
