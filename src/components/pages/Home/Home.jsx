import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Data } from "../../../Context/DataProvider";

const Home = () => {
  // data 
  const { home } = useContext(Data);

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
  };
  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return(
    <div
      id="home"
      className={`w-full pt-15 transition-all text-gray-200`}
    >
      <motion.div
        className="bg-[#1a1d2e] rounded-lg shadow-xl pb-8 relative mx-auto"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0 , scale: 1}}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute mt-4 rounded"></div>
        <div className="w-full h-[250px]">
          <motion.img
            src={home.bgImage}
            alt="cover"
            className="w-full sm:h-full rounded-tl-lg rounded-tr-lg object-cover"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0 , scale: 1}}
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0 , scale: 1}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center -mt-35 sm:-mt-20">
          <motion.img
            src={home.profileImage}
            alt="profile"
            className="w-40 border-2 border-cyan-500 rounded-full"
            variants={profileVariants}
            initial="hidden"
            animate="visible"
          />
          <div className="flex items-center space-x-2 mt-2">
            <motion.p
              className="text-2xl"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {home.name}
            </motion.p>
            <span className="bg-blue-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </div>
          <motion.p
            className="text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {home.title}
          </motion.p>
          <motion.p
            className="text-sm text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {home.bio}
          </motion.p>
        </motion.div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2">
            <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
              <AnchorLink
                href="#contact"
                className="flex items-center cursor-pointer bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
              >
                Contact
              </AnchorLink>
            </motion.div>
            <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
              <Link
                to={home.messageLink}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
              >
                Message
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;