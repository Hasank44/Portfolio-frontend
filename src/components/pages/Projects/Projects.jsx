import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { Data } from '../../../Context/DataProvider';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  // data
  const { project } = useContext(Data);
  const projects = project || [];
  //
  const displayedProjects = showAll ? projects : projects.slice(0, 6);
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: [
        '0px 8px 16px rgba(0, 0, 0, 0.3)',
        '0px 4px 12px rgba(20, 184, 166, 0.4)',
        '0px 2px 8px rgba(59, 130, 246, 0.3)',
      ].join(', '),
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      id='projects'
      className="w-full h-auto py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className=" mx-auto">
        <motion.div
          className="text-center mb-5 text-gray-200"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-[30px] font-semibold">Projects</h1>
          <p className="opacity-80 text-sm">My recent projects</p>
        </motion.div>

        <motion.h2
          onClick={() => setShowAll(!showAll)}
          className=" font-semibold w-22 mb-6 text-right right-0 text-blue-300 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          {showAll ? 'Show less' : 'Show more'}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2}}
          variants={containerVariants}
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1d2e] rounded-lg p-6 shadow-lg text-white"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              whileHover="hover"
              whileTap="tap"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 rounded-md cursor-pointer mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-1" /> GitHub
                </a>
                <a
                  href={project.link}
                  className="text-teal-400 hover:text-teal-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;