import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import projectdatajson from "../assets/Data/Project";
import ReactLoading from "react-loading";
import { motion } from "framer-motion";
import Error from "./Error";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectTemp = () => {
  const { name } = useParams();
  const [projectdata, setProjectdata] = useState();
  const [error, setError] = useState(false);
  const fetchjson = (name) => {
    const projectdata = projectdatajson.find(
      (project) => project.title == name
    );
    if (projectdata) {
      setProjectdata(projectdata);
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    fetchjson(name);
  }, [name]);

  if (!error) {
    if (!projectdata) {
      return (
        <div className="flex justify-center items-center">
          <ReactLoading
            type={"bars"}
            color={"purple"}
            height={667}
            width={375}
          />
        </div>
      );
    }
  }

  if (error) {
    return <Error />;
  }
  const fadeUpAnimation = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };
  const fadedownAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div className="project-card-main flex justify-center items-center">
        <div className="project-temp flex justify-start lg:flex-row flex-col lg:gap-20 gap-10 lg:mx-[6rem]  ">
        <div className="lg:w-[36rem]  overflow-hidden lg:relative  w-full    lg:mx-3  mx-auto ">
          <div className="project-side-card lg:h-[100vh] lg:w-[26%] w-[98%] lg:mx-0  flex justify-center flex-col   ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeUpAnimation}
              className="lg:w-[22rem]  md:w-[22rem] lg:mx-0 md:mx-auto w-[98%] mx-2  rounded-xl bg-[#2B2C2D]/50  lg:py-5 py-3 lg:h-[34rem] h-[35rem] flex flex-col justify-start lg:p-5 "
            >
              <span className="lg:w-[20rem] overflow-hidden w-[95%] h-[16rem] mx-auto border-4 border-purple-500 rounded-xl">
                <LazyLoadImage
                  src={projectdata.image ? projectdata.image : null}
                  alt={projectdata.title}
                  className="w-full h-full mx-auto object-cover"
                />
              </span>
              <div className="flex flex-col justify-center mt-3 ">
                <h1 className="text-center text-3xl text-white font-bold  capitalize font-[Playfair-Display]">
                  {projectdata.title}
                </h1>
                <p className="text-center text-md text-purple-500 ">
                  {projectdata.type}
                </p>
              </div>

              <div className="my-5 lg:ml-0 ml-3">
                <h1 className="text-start text-2xl text-white font-bold  font-[Playfair-Display]">
                  Technologies Used
                </h1>
                <ul className="ml-3 lg:list-disc">
                  {projectdata?.technologies?.length > 0 &&
                    projectdata.technologies.map((item, i) => {
                      return <li key={i}>{item.point}</li>;
                    })}
                </ul>
              </div>
              <div className="flex justify-center my-3">
                <Link
                  to={`${projectdata.github}`}
                  target="_blank"
                  className="px-3 py-2 rounded-lg bg-purple-600 text-white lg:flex justify-center lg:mx-3 mx-auto cursor-pointer"
                >
                  GitHub Link
                </Link>
                {projectdata.site ? (
                  <Link
                    to={`${projectdata.site}`}
                    target="_blank"
                    className="px-3 py-2 rounded-lg bg-purple-600 text-white lg:flex justify-center lg:mx-3 mx-auto cursor-pointer"
                  >
                    Vist Site
                  </Link>
                ) : null}
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadedownAnimation}
          className="w-full lg:mt-5 mt-0 overflow-y-hidden"
        >
          <h1 className="lg:text-5xl text-3xl font-bold  capitalize lg:text-start text-center lg:mx-0  mx-3 font-[Playfair-Display]">
            {projectdata.title}
          </h1>
          <p className="my-4 lg:text-lg text-sm lg:text-start text-center lg:mx-0 mx-3">
            {projectdata.description}
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadedownAnimation}
          >
            <h1 className="lg:text-4xl  text-purple-500 text-3xl font-bold lg:text-start text-center lg:mx-0  mx-3 font-[Playfair-Display]">
              Features
            </h1>
            <p className="my-4 lg:text-lg text-sm lg:text-start md:text-center text-start lg:mx-0 mx-3">
              <ul className="lg:list-disc   md:list-none list-disc ml-5 ">
                {projectdata.features.map((feature, index) => {
                  return <li key={index}>{feature.point}</li>;
                })}
              </ul>
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadedownAnimation}
          >
            <h1 className="lg:text-4xl  text-purple-500 text-3xl font-bold lg:text-start text-center lg:mx-0  mx-3 font-[Playfair-Display]">
              Technologies Used
            </h1>
            <p className="my-4 lg:text-lg text-sm lg:text-start md:text-center text-start lg:mx-0 mx-3">
              <ul className="lg:list-disc   md:list-none list-disc ml-5  ">
                {projectdata.technologies.map((item, i) => {
                  return <li key={i}>{item.point}</li>;
                })}
              </ul>
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadedownAnimation}
          >
            <h1 className="lg:text-4xl  text-purple-500 text-3xl font-bold lg:text-start text-center lg:mx-0  mx-3 font-[Playfair-Display]">
              Usage
            </h1>
            <p className="my-4 lg:text-lg text-sm lg:text-start md:text-center text-start lg:mx-0 mx-3 lg:ml-0 md:ml-5">
              <ul className="lg:list-disc   md:list-none list-disc ml-5  ">
                {projectdata.usage.map((item, i) => {
                  return <li key={i}>{item.point}</li>;
                })}
              </ul>
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadedownAnimation}
            className="flex lg:justify-start justify-start my-3 mb-20 z-50 "
          >
            <Link
              to={`${projectdata.github}`}
              target="blank"
              className="px-3 py-2 rounded-lg bg-purple-600 text-white lg:flex justify-center lg:mx-3 mx-auto cursor-pointer"
            >
              GitHub Link
            </Link>
            {projectdata.site ? (
              <Link
                to={`${projectdata.site}`}
                target="_blank"
                className="px-3 py-2 rounded-lg bg-purple-600 text-white lg:flex justify-center lg:mx-3 mx-auto cursor-pointer"
              >
                Vist Site
              </Link>
            ) : null}
          </motion.div>
        </motion.div>
      </div>
      </div>
    </>
  );
};

export default ProjectTemp;
