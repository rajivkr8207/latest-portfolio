import React from "react";
import Profile from "../Components/Profile";
import Collaborate from "../Components/Collaborate";
import Projectcomponents from "../Components/Projectcomponents";
import myself from '../assets/myself.png'
import projectdata from "../assets/Data/Project";
const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "This is a description of project 1",
      image: myself,
      link: "https://www.example.com",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a description of project 2",

      image: myself,
      link: "https://www.example.com",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is a description of project 3",

      image: myself,
      link: "https://www.example.com",
    },
    {
      id: 4,
      title: "Project 4",
      description: "This is a description of project 4",

      image: myself,
      link: "https://www.example.com",
    },
  ];
  
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
