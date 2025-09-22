import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Data } from '../../../Context/DataProvider';

const Skills = () => {
  // data
  const { skill } = useContext(Data);
  const skills = skill || [];

  // grouped by type
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.type]) acc[skill.type] = [];
    acc[skill.type].push(skill);
    return acc;
  }, {});

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3, ease: 'easeInOut' } },
  };

  const containerVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.4, ease: 'easeInOut'}
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.6, ease: 'easeInOut' },
    },
    hover: {
      scale: 1.03,
      boxShadow: [
        '0px 8px 16px rgba(0, 0, 0, 0.3)',
        '0px 4px 12px rgba(20, 185, 166, 0.3)',
        '0px 2px 8px rgba(59, 130, 246, 0.3)',
      ].join(', '),
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    tap: { scale: 0.98 }
  };

  return (
    <div id="skills" className="w-full h-auto py-10 text-gray-200">
      <motion.div
        className="text-center mb-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={titleVariants}
      >
        <h1 className="text-[30px] font-semibold">My Technical Skills</h1>
        <p className="opacity-80">What I do?</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2}}
        variants={containerVariant}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {Object.entries(categories).map(([category, skills]) => (
          <motion.div
            key={category}
            className="bg-[#11131a] p-2 sm:p-5 rounded-xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <h2 className="text-xl font-semibold mb-4 text-center">{category}</h2>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-center gap-3 p-2 bg-[#1a1d29] rounded-lg shadow"
                  custom={index}
                  viewport={{ once: true, amount: 0.2 }}
                  initial="hidden"
                  whileInView="visible"
                  animate="visible"
                  variants={skillVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <img src={item.icon} className="w-8 h-8" alt={item.title} />
                  <h1 className="text-sm">{item.title}</h1>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
