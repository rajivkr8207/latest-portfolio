import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import profilepic from "../assets/myself.png";
import { motion } from "framer-motion";
const Profile = () => {
  const navigate = useNavigate();

  const fadedownanimation = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration:
      1.5 } },
  }
  return (
    <>
      <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadedownanimation}

      className="lg:w-[22rem] md:w-[22rem] md:mx-auto w-full mx-2  rounded-xl bg-[#2B2C2D]/50  py-5 lg:h-[35rem] h-[35rem] flex flex-col justify-between lg:p-5  lg:sticky lg:top-0 lg:z-40">
        <span className="lg:w-[17rem] overflow-hidden w-full h-[18rem] lg:mx-auto border-4 border-purple-500 rounded-xl">
          <img
            src={profilepic}
            alt=""
            className="w-full h-full mx-auto object-cover"
          />
        </span>
        <div className="flex flex-col justify-center mt-[-3rem]">
          <h1 className="text-center text-4xl text-white font-bold  font-[Playfair-Display]">
            Rajiv kumar
          </h1>
          <p className="text-center text-base text-white">
            {" "}
            Dedicated full-stack developer creating efficient, scalable, and
            user-friendly web applications.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => {
              navigate("/contact"), window.scroll(0, 0);
            }}
            className="px-5 py-3 rounded-lg bg-purple-600 text-white lg:flex justify-center lg:mx-3 mx-auto cursor-pointer"
          >
            lets Connect
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Profile;
