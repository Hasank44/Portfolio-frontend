import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Data } from '../../../Context/DataProvider';

const Services = () => {
  // data 
  const { service } = useContext(Data);
  const services = service || [];
  //
  
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
      scale: 1.05,
      rotate: 0,
      boxShadow: [
        '0px 8px 16px rgba(0, 0, 0, 0.3)',
        '0px 4px 12px rgba(20, 184, 166, 0.4)',
        '0px 2px 8px rgba(59, 130, 246, 0.3)',
      ].join(', '),
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    tap: { scale: 0.98 },
  };

  const headerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <motion.div
      id="service"
      className="w-full h-auto py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center mx-auto mb-5">
        <motion.h1
          className="text-3xl text-gray-200 font-semibold"
          variants={headerVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          Services
        </motion.h1>
        <motion.p
          className="opacity-80 text-gray-400 mt-2 text-sm"
          variants={subtitleVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          My Primary Services
        </motion.p>
      </div>

      <div className="w-full mx-auto">
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2}}
        >
          {services.map((service) => (
            <motion.li
              key={service.title}
              className="p-6 bg-[#1a1d2e] rounded-lg border border-gray-900 flex flex-col items-center text-center cursor-pointer"
              variants={itemVariants}
              viewport={{ once: true, amount: 0.2}}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              animate="visible"
              whileTap="tap"
            >
              <motion.img
                src={service.icon}
                className="text-3xl w-10 mb-2"
                whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
              >
              </motion.img>
              <h1 className="text-[20px] text-gray-200 font-semibold mb-2">{service.title}</h1>
              <p className="opacity-80 text-gray-300 text-sm">{service.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Services;