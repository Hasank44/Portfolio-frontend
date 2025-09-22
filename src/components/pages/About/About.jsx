import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Data } from "../../../Context/DataProvider";

const About = () => {
  // data 
  const { about } = useContext(Data);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeInOut",
        staggerChildren: 0.2 
      } 
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeInOut" } 
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeInOut" } 
    },
    hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div id="about" className="w-full h-auto mt-15 py-10">
      <motion.div
        className="text-center mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={titleVariants}
      >
        <h1 className="text-3xl font-bold text-white">About Me</h1>
        <p className="text-gray-400 my-1">My Introduction</p>
      </motion.div>
      <div className="w-full ">
        <motion.div 
          className={`mx-auto bg-[#1a1d2e] rounded-lg shadow-md px-6 py-10 flex flex-col md:flex-row items-center text-center md:text-left
           shadow-cyan-600`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-cyan-700 mb-4 md:mb-0 md:mr-6"
            variants={itemVariants}
          >
            <img 
              src={about.image} 
              alt={about.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex-1">
            <motion.p 
              className="text-gray-300 text-sm uppercase tracking-wide"
              variants={itemVariants}
            >
              {about.title}
            </motion.p>
            <motion.h1 
              className="text-white text-3xl font-bold mt-2"
              variants={itemVariants}
            >
              {about.name}
            </motion.h1>
            <motion.p 
              className="text-gray-300 mt-4 leading-relaxed"
              variants={itemVariants}
            >
            {about.description}
            </motion.p>

            <motion.div 
              className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start"
              variants={containerVariants}
            >
              <motion.a 
                href={about.cvLink}
                className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
                variants={buttonVariants}
                whileHover="hover"
              >
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;