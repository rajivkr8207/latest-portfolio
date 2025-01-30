import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Collaborate = () => {
  const navigate = useNavigate();
  const fadeupanimation = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeupanimation}
        onClick={() => {
          navigate("/contact"), window.scroll(0, 0);
        }}
        className="lg:w-full md:w-[30rem] w-[98vw] mx-auto p-5 bg-[#2B2C2D]/50 rounded-3xl flex flex-col  my-5 hover:bg-purple-500 transition-all group duration-300 cursor-pointer mb-16"
      >
        <div className="flex justify-between mb-2">
          <div>
            <h1 className="lg:text-6xl text-3xl font-bold  font-[Playfair-Display]">
              let's <br />
              <span className="text-purple-500 group-hover:text-white transition-all duration-300">
                Collaborate
              </span>
            </h1>
          </div>
          <div>
            <button className="bg-purple-500 p-5 rounded-full group-hover:bg-white transition-all duration-300">
              <FaArrowRightLong className="text-2xl -rotate-45 group-hover:text-purple-500 transition-all duration-300" />
            </button>
          </div>
        </div>

        <div>
          <p className="lg:text-md text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quis?
            Debitis pariatur quis eius laudantium corporis fugit necessitatibus
            at. Totam.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Collaborate;
