import { useEffect, useState } from "react";
import Profile from "../Components/Profile";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjkgvavd");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Smooth scrolling to top
  }, [pathname]); // Runs when the page (pathname) changes

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
      navigate("/") // Redirect after success
      setLoading(false);
    }
  }, [state.succeeded, navigate]);

  // Animation for the container
  const fadeUpContainer = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  // Animation for child elements
  const fadeUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
{loading?
    <div className="w-full h-screen absolute top-0 left-0 z-10">
      <img src="" alt="" />
    </div> : null }
      <div>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          variants={fadeUpContainer}
          className="lg:text-5xl font-[Playfair-Display] text-3xl font-bold lg:text-start text-center"
        >
          Let’s Create Something
          <span className="text-purple-500"> Amazing</span>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpContainer}
          className="lg:w-full p-5 mx-2 my-5 rounded-3xl bg-[#2b2a2a]/60"
        >
          <form
            onSubmit={(e) => {
              setLoading(true);
              handleSubmit(e);
            }}
            className="text-white"
          >
            <div className="flex flex-col gap-4">
              <motion.div variants={fadeUpItem}>
                <label htmlFor="name" className="text-lg">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full p-3 rounded border bg-transparent border-gray-400 focus:outline-none focus:border-purple-500"
                  required
                  autoComplete="off"
                />
              </motion.div>

              <motion.div variants={fadeUpItem}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded border bg-transparent border-gray-400 focus:outline-none focus:border-purple-500"
                  required
                  autoComplete="off"
                />
              </motion.div>

              <motion.div variants={fadeUpItem}>
                <label htmlFor="message">Message:</label>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  id="message"
                  className="w-full p-3 rounded border bg-transparent border-gray-400 focus:outline-none focus:border-purple-500"
                  required
                  autoComplete="off"
                />
              </motion.div>

              <motion.div variants={fadeUpItem}>
                <button
                  disabled={state.submitting || loading}
                  className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </motion.div>
            </div>
          </form>
        </motion.div>
      </div>

      <div className="lg:hidden flex lg:mb-0 mb-16">
        <Profile />
      </div>
    </>
  );
};

export default Contact;
