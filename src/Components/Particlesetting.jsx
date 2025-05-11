// import React from 'react'

import { useEffect, useState } from "react";
import Buttoncus from "./Buttoncus";
import { IoMdClose } from "react-icons/io";

const Particlesetting = (props) => {
  const handlevaluechange = (e) => {
    const { name, value } = e.target;
    // eslint-disable-next-line react/prop-types
    props.setPraticlesetting({
      ...props.praticlesetting,
      [name]: Number(value),
    });
  };
// In your component
useEffect(() => {
  localStorage.setItem("particlessetting", JSON.stringify(props.praticlesetting));
}, [props.praticlesetting]);

  const handlereset = () => {
    props.setPraticlesetting({
      is_on: true,
      speed: 2,
      edge: 80,
    });
    
    // eslint-disable-next-line react/prop-types
    props.setPartisetting(false);
  };
  const handlesubmit = () => {
    console.log("handle submit");
    // eslint-disable-next-line react/prop-types
    props.setPartisetting(false);
  };
  return (
    <>
      <div className="w-full  fixed capitalize lg:max-w-sm md:max-w-lg mx-auto  z-50 p-3 bg-white/30 backdrop-blur-md shadow-lg rounded-2xl  lg:top-16 md:top-24   lg:right-3 right-0">
        <div className=" flex justify-end">
          <button
            onClick={() => {
              props.setPartisetting(false);
            }}
            className="flex bg-purple-600 p-2 rounded-full text-white"
          >
            <IoMdClose className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="w-full">
            <label htmlFor="edge" className="text-sm font-medium text-white">
              Edge:{" "}
              <span className="text-white">({props.praticlesetting.edge})</span>
            </label>
            <input
              type="range"
              id="edge"
              name="edge"
              min={50}
              max={200}
              value={props.praticlesetting.edge}
              onChange={handlevaluechange}
              className="w-full accent-purple-600"
            />
          </div>

          <div className="w-full">
            <label htmlFor="speed" className="text-sm font-medium text-white">
              Speed:{" "}
              <span className="text-white">
                ({props.praticlesetting.speed})
              </span>
            </label>
            <input
              type="range"
              id="speed"
              name="speed"
              min={2}
              max={8}
              value={props.praticlesetting.speed}
              onChange={handlevaluechange}
              className="w-full accent-purple-600"
            />
          </div>

          {/* <div className="w-full">
        <label htmlFor="speed" className="text-sm font-medium text-white">
          is_show: 
        </label>
        <input
          type="checkbox"
          id="speed"
          name="speed"
          min={2}
          max={8}
          value={props.praticlesetting.is_on}
          onChange={handleison}
          className="w-full accent-purple-600"
        />
      </div> */}

          <div className="flex gap-4 justify-center w-full">
            <Buttoncus name="Submit" onClick={handlesubmit} />
            <button
              onClick={handlereset}
              className=" px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-200"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Particlesetting;
