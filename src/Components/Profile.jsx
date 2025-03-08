import {  useNavigate } from "react-router-dom";
import profilepic from "../assets/rajiv.webp";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
const Profile = () => {
  const navigate = useNavigate();
  const links = [
    {
      id: 1,
      icon: <CiInstagram />,
      link: "https://www.instagram.com/rajiv_coder",
    },
    {
      id: 2,
      icon: <CiLinkedin />,
      link: "https://www.linkedin.com/in/rajiv-kumar-508213346",
    },
  ];
  const fadedownanimation = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };
  useEffect(() => {
    window.scroll((e) => {
      e.preventDefault();
      console.log(e);
    });
  }, []);

  return (
    <>
      <div className="lg:h-full md:h-[75vh]  h-auto mb-3 flex flex-col justify-center items-center  mx-auto lg:fixed lg:top-0 lg:z-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadedownanimation}
          className="lg:w-[22rem] md:w-[22rem] md:mx-auto w-[95%] mx-2  rounded-xl bg-[#2B2C2D]/50  py-5 lg:h-[35rem] h-[38rem] flex flex-col justify-between lg:p-5  "
        >
          <span className="lg:w-[17rem] overflow-hidden w-[80%]  lg:h-[18rem] h-[20rem] mx-auto border-4 border-purple-500 rounded-xl">
            <img
              src={profilepic}
              alt="My profile pic"
              className="w-full h-full mx-auto object-cover "
              loading="lazy" 
            />
          </span>
          <div className="flex flex-col justify-center mt-[-1rem]">
            <h1 className="text-center text-4xl text-white font-bold  font-[Playfair-Display]">
              Rajiv kumar
            </h1>
            <p className="text-center text-base text-white">
              {" "}
              Dedicated full-stack developer creating efficient, scalable, and
              user-friendly web applications.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              {links.map(({ id, icon, link }) => (
                <Link
                  key={id}
                  to={link}
                  target="_blank"
                  className="text-3xl  hover:text-[#8d4aea] transition-all duration-300"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                navigate("/contact"), window.scroll(0, 0);
              }}
              className=" px-5 py-3 rounded-lg bg-purple-600 text-white lg:flex justify-center lg:mx-3 mx-auto cursor-pointer"
              >
              lets Connect
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Profile;
