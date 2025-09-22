import React, { useState } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Data } from "../../../Context/DataProvider";

const Qualification = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  // data
  const { qualification } = useContext(Data);
  const cards = qualification || [];

  const containerVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1, duration: 0.4, ease: 'easeInOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95},
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        stiffness: 200,
        damping: 20,
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
    tap: { scale: 1 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05, transition: { duration: 0.2, ease: "easeOut" }
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      id="qualification"
      className="w-full flex flex-col h-auto items-center py-10 bg-gray-900"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="text-center mb-5"
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2}}
          variants={titleVariants}
          className="text-3xl font-semibold text-gray-200 mb-2"
        >
          Qualification
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2}}
          variants={titleVariants} className="text-gray-400 text-lg">
          My Personal Journey
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="w-full flex flex-col items-center gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="w-full flex flex-col sm:flex-row gap-5 justify-center">
          {cards.slice(0, 2).map((card) => (
            <motion.div
              key={card._id}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2}}
              variants={cardVariants}
              whileTap="tap"
              whileHover="hover"
              className="flex items-center gap-6 bg-[#11131a] rounded-t-xl p-6 "
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-20 sm:w-25 h-20 sm:h-25 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl text-gray-200 font-semibold mb-2">
                  {card.title}
                </h2>
                <h2 className=" text-gray-300 font-semibold mb-1">
                  {card.place}
                </h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-5 sm:line-clamp-3">
                  {card.description}
                </p>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  onClick={() => setSelectedCard(card)}
                  className="px-3 py-2 cursor-pointer bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                >
                  READ MORE
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        { cards[2] && (
            <motion.div
          variants={cardVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            whileTap="tap"
          className="flex items-center gap-6 bg-[#11131a] rounded-b-xl shadow-md p-6 w-full"
        >
          <img
            src={cards[2].image}
            alt={cards[2].title}
            className="w-20 sm:w-25 h-20 sm:h-25 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl text-gray-200 font-semibold mb-2">
              {cards[2].title}
            </h2>
            <h2 className=" text-gray-300 font-semibold mb-1">
              {cards[2].place}
            </h2>
            <p className="text-gray-400 text-sm mb-4 line-clamp-5 sm:line-clamp-3">
              {cards[2].description}
            </p>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              onClick={() => setSelectedCard(cards[2])}
              className="px-3 py-2 cursor-pointer bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
            >
              READ MORE
            </motion.button>
          </div>
        </motion.div>
          )}
      </motion.div>

      {/* Modal */}
      {selectedCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-70 z-50"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg max-w-lg w-full relative"
          >
            <motion.button
              variants={buttonVariants}
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl transition"
            >
              ✕
            </motion.button>
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-center mb-2">
              {selectedCard.title}
            </h2>
            <h3 className="text-gray-300 text-center mb-4">
              {selectedCard.place}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {selectedCard.description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Qualification;