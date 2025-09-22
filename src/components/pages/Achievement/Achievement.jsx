import { motion, } from "framer-motion";
// import trophy from "../../../assets/image/trophy.png";
import Counter from "../../../utils/Counter";
import { useContext } from "react";
import { Data } from "../../../Context/DataProvider";


const Achievements = () => {
  // data
  const { achievement, achieve } = useContext(Data);
  const stats = achieve || [];
  const achievements = achievement || [];
  //

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1, ease: "easeInOut" } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.7, type: "spring", stiffness: 70, damping: 12, ease: "easeInOut" } 
    },
    hover: {
      scale: 1.05,
      boxShadow: [
        "0px 8px 16px rgba(0, 0, 0, 0.3)",
        "0px 4px 12px rgba(20, 184, 166, 0.4)",
        "0px 2px 8px rgba(59, 130, 246, 0.3)",
      ].join(", "),
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: { scale: 0.98 }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  return (
    <section id="achievements" className="w-full py-10 h-auto text-white flex flex-col items-center">
      <motion.div
        className="text-center w-full h-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={titleVariants}
          viewport={{ once: true, amount: 0.2}}
          className="mb-5 text-gray-200">
          <motion.h1 className="text-3xl font-semibold">Achievements</motion.h1>
          <motion.p className="opacity-80">My achieve</motion.p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-5">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement._id}
              initial="hidden"
              whileInView="visible"
              animate="visible"
              variants={itemVariants}
              whileTap="tap"
              viewport={{ once: true, amount: 0.2}}
              whileHover="hover"
              className="bg-[#1b1e27] p-6 rounded-lg text-left w-full sm:w-1/3"
            >
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                {achievement.id}. {achievement.title}
              </h3>
              <p className="text-gray-300 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2}}
          variants={itemVariants}
          whileTap="tap"
          className="bg-gradient-to-b from-[#11131a] to-[#222624] p-6 rounded-lg text-white text-center"
        >
          <p className="text-sm">
            Continued growth through support, and learning new technologies. Dedicated to excellence in web development.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 pt-3 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat._id}
              className="rounded-xl text-center py-3 sm:py-5 border border-gray-700 transition-colors"
              variants={itemVariants}
              initial="hidden"
              viewport={{ once: true, amount: 0.2}}
              whileInView="visible"
              whileHover="hover"
              animate="visible"
              whileTap="tap"
            >
              <h2 className="text-2xl font-extrabold mb-2">
                <Counter target={stat.number} />
              </h2>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;
