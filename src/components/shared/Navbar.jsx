import React, { useEffect, useState } from 'react';
import { MdMenuOpen, MdClose, MdOutlineHome, MdPerson } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { FaToolbox } from "react-icons/fa";
import { HiPhoto } from "react-icons/hi2";
import { TbSend2 } from "react-icons/tb";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Message } from '../../Context/MessageContext';
import { Data } from '../../Context/DataProvider';

const Navbar = () => {
  const { ToastContainer } = useContext(Message);
  const { logo } = useContext(Data);
  const [activeLink, setActiveLink] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const style = { transition: 'all 0.4s ease-in-out' };
  const image = logo.image;

  const navitems = [
    { title: 'Home', icon: <MdOutlineHome />, to: '#home' },
    { title: 'About', icon: <MdPerson />, to: '#about' },
    { title: 'Qualification', icon: <FaToolbox />, to: '#qualification' },
    { title: 'Skills', icon: <GrNotes />, to: '#skills' },
    { title: 'Projects', icon: <HiPhoto />, to: '#projects' },
    { title: 'Service', icon: <TbSend2 />, to: '#service' },
    { title: 'Contact-me', icon: <TbSend2 />, to: '#contact' },
  ];
console.log(window.innerHeight)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (scrollPos < 660) {
        setActiveLink('#home');
      } else if (scrollPos >= 660 && scrollPos < 1130) {
        setActiveLink('#about');
      } else if (scrollPos >= 1130 && scrollPos < 1750) {
        setActiveLink('#qualification');
      } else if (scrollPos >= 1750 && scrollPos < 2450) {
        setActiveLink('#skills');
      } else if (scrollPos >= 2450 && scrollPos < 3120) {
        setActiveLink('#projects');
      } else if (scrollPos >= 3120 && scrollPos < 4200) {
        setActiveLink('#service');
      } else {
        setActiveLink('#contact');
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`w-full h-auto font-serif top-0 z-50 sticky text-gray-200 bg-gray-900`}>
      <div className='flex items-center justify-between h-12 px-4'>
        <div className='flex items-center gap-2'>
          <img src={image} alt="logo" className='w-8 h-8 rounded-full' />
          <h1 className='bg-gradient-to-r text-xl from-cyan-400 to-blue-300 bg-clip-text text-transparent'>Hasan</h1>
        </div>
        <ToastContainer />
        {/* Desktop menu */}
        <ul className='md:gap-3 hidden md:flex relative'>
          {navitems.map((item) => (
            <li key={item.title} className='relative'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 100, damping: 5 }}
              >
                <AnchorLink
                  href={item.to}
                  onClick={() => setActiveLink(item.to || '#home')}
                  className={`px-2 py-1 ${activeLink === item.to ? 'text-cyan-500' : 'hover:text-cyan-500'}`}
                >
                  {item.title}
                </AnchorLink>
              </motion.div>

              {/* Smooth Underline */}
              {activeLink === item.to && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-cyan-700"
                  transition={{ duration: 0.3, ease: "linear" }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <div className='space-x-3 md:hidden'>
          <button onClick={toggleMenu} className='text-3xl'>
            <MdMenuOpen />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-0 w-full md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'block opacity-100 translate-y-0 bg-gray-950' : 'hidden -translate-y-full'
        }`}
        style={style}
      >
        <div className='flex text-center justify-between px-5 py-5'>
          <h1 className='bg-gradient-to-r text-xl from-cyan-400 to-blue-300 bg-clip-text text-transparent'>Hasan</h1>
          <button onClick={toggleMenu} className='text-2xl'>{isOpen && <MdClose />}</button>
        </div>

        <ul className='grid grid-cols-3 text-center items-center mx-auto py-5 gap-5 sm:gap-6'>
          {navitems.map((item) => (
            <motion.li
              key={item.title}
              className='w-full'
              whileHover={{ scale: 1.15, color: "#1fa4cc" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <AnchorLink
                href={item.to}
                onClick={() => setActiveLink(item.to || 'home')}
                className={`flex flex-col items-center w-full ${
                  activeLink === item.to ? 'text-cyan-500' : 'hover:text-cyan-500'
                }`}
              >
                <p className='text-[20px]'>{item.icon}</p>
                <p>{item.title}</p>
              </AnchorLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
