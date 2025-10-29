import { Link, useNavigate } from "react-router-dom";
import projectdata from "../assets/Data/Project";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Projectcomponents = () => {
  const navigate = useNavigate();
  
  // Adjusted animations for smoother effects
  const fadeUpAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 25,
        staggerChildren: 0.2,
      } 
    }
  };

  const cardHoverAnimation = {
    hover: { scale: 1.05, boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)" }
  }

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeUpAnimation}
      >
        <h1 className="lg:text-5xl font-[Playfair-Display] text-3xl font-bold lg:text-start text-center">
          Recent Projects and
          <span className="text-purple-500"> Achievements</span>
        </h1>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUpAnimation}
          className="flex flex-wrap gap-3 my-5"
        >
          {projectdata.map((project, index) => (
            <motion.div
              key={index}
              className="w-[18rem] rounded-3xl overflow-hidden bg-gradient-to-b from-[#2B2C2D] via-[#323334] to-[#3A3B3C] shadow-lg group transition-all duration-300 mx-auto"
              whileHover="hover"
              variants={cardHoverAnimation}
            >
              {/* Image Section */}
              <span onClick={() => { navigate(`/project/${project.title}`), window.scroll(0, 0); }}>
                <div className="w-full h-[13rem] overflow-hidden">
                  <LazyLoadImage
                    src={project.image ? project.image : null}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </span>

              {/* Project Title */}
              <div className="p-4">
                <span onClick={() => { navigate(`/project/${project.title}`), window.scroll(0, 0); }}>
                  <h2 className="text-2xl font-[Playfair-Display] font-bold text-white group-hover:text-purple-500 transition-colors duration-300">
                    {project.title}
                  </h2>
                  {/* Project Description */}
                  <p className="text-base text-gray-400 mt-2">
                    {project.description.slice(0, 30)}...
                  </p>
                </span>
                {project.link && (
                  <Link
                    to={`${project.link}`}
                    target="_blank"
                    className="my-3 flex items-center text-purple-500 hover:text-purple-700"
                  >
                    Visit site <FaArrowRight className="my-auto mx-2" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projectcomponents;
