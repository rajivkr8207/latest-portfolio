import { useState } from "react";
import { getAIResponse } from "./Api";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function AiChat({setAichat}) {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    setResponse("Thinking...");
    const aiResponse = await getAIResponse(input);
    setResponse(aiResponse);
  };

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="w-full  fixed lg:max-w-md md:max-w-lg mx-auto z-50 p-6 bg-white/30 backdrop-blur-md shadow-lg rounded-2xl  lg:top-10 md:top-24   lg:right-3 right-0">
        <div className=" flex justify-end">
        <button onClick={()=>{setAichat(false)}} className="flex bg-purple-600 p-2 rounded-full text-white">
        <IoMdClose className="text-2xl"/>
        </button>
        </div>
      <h2 className="text-xl font-semibold text-center mb-4 text-white">
        Ask Me Anything About Myself!
      </h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me something like (your full information, )..."
        className="w-full h-24 p-3 border text-lg bg-transparent border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
      />
       {response && (
        <p className="mt-4 p-3 bg-black/30 shadow-lg border border-gray-300 rounded-lg text-white  ">
          {response}
        </p>
      )}
      <button
        onClick={handleSubmit}
        className="w-full mt-3 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
      >
        Ask Me
      </button>
      
     
    </motion.div>
  );
}

export default AiChat;
