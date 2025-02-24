import React, { useEffect } from "react";
import Profile from "../Components/Profile";
import Collaborate from "../Components/Collaborate";
import Projectcomponents from "../Components/Projectcomponents";
import myself from '../assets/myself.png'
import projectdata from "../assets/Data/Project";
import { useLocation } from "react-router-dom";
const Project = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Smooth scrolling to top
  }, [pathname]); // Runs when the page (pathname) changes

  return (
    <>
   <Projectcomponents />
    <div className='lg:hidden flex'>
    <Profile  />
    </div>
    <Collaborate />
    </>
  );
};

export default Project;
