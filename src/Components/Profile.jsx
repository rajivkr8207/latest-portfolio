import { useNavigate } from "react-router-dom";
import profilepic from "../assets/rjpic.png";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Tilt from "react-parallax-tilt";
import Buttoncus from "./Buttoncus";
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
      icon: <FaGithub />,
      link: "https://github.com/rajivkr8207",
    },
    {
      id: 3,
      icon: <CiLinkedin />,
      link: "https://www.linkedin.com/in/rajiv-kumar-a14999386",
    },
    {
      id: 4,
      icon: <FaXTwitter />,
      link: "https://x.com/Rajivkr8207",
    },
  ];
  const fadedownanimation = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    transition: { type: "spring", stiffness: 80, damping: 10 },
  };
  useEffect(() => {
    window.scroll((e) => {
      e.preventDefault();
      console.log(e);
    });
  }, []);

  return (
    <>
      <div className="profilecard lg:h-full card-container   h-auto mb-3 flex flex-col justify-center items-center  mx-auto ">
        <Tilt>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadedownanimation}
            className="lg:w-[22rem]  profile-card md:w-[22rem] md:mx-auto w-[95%] mx-2  rounded-xl bg-[#2B2C2D]/50  py-5 lg:h-[35rem] h-[38rem] flex flex-col justify-between lg:p-5  "
            data-tilt
          >
            <span className="lg:w-[17rem] overflow-hidden w-[80%]  lg:h-[18rem] h-[20rem] mx-auto border-4 border-purple-500 rounded-xl">
              <LazyLoadImage
                alt="My profile pic"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
                scrollPosition={0}
                src={profilepic}
                className="w-full h-full mx-auto object-fill "
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
              <Buttoncus
                onClick={() => {
                  navigate("/contact"), window.scroll(0, 0);
                }}
                name="lets Connect"
              />
            </div>
          </motion.div>
        </Tilt>
      </div>
    </>
  );
};

export default Profile;
