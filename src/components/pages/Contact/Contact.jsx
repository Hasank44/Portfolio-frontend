import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoSend } from "react-icons/io5";
import { useContext } from "react";
import { Message } from "../../../Context/MessageContext";
import { Data } from "../../../Context/DataProvider";
import axios from 'axios';


const Contact = () => {
  const { toast } = useContext(Message);
  //data
  const { contactLocation, contactSocial } = useContext(Data);
  const contacts = contactLocation || [];
  const socials = contactSocial || [];
  //
  const apiUrl = import.meta.env.VITE_API_URL;
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const inputOnChange = (property, value) => {
    setData((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const { name, email, subject, message } = data;
      const res = await axios.post(`${apiUrl}/contact`, {
        name,
        email,
        subject,
        message
      });
      toast.success(res.data.message);
      setData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    } catch (error) {
      error
    };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    shadow: {
      boxShadow: [
        '0px 8px 16px rgba(0, 0, 0, 0.3)',
        '0px 4px 12px rgba(21, 40, 38, 0.4)',
        '0px 2px 8px rgba(59, 130, 246, 0.3)',
      ].join(', '),
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } },
  };

  return (
    <div
      id="contact"
      className="w-full text-center h-auto py-10 text-white"
    >
      <div className=" mx-auto">
        <motion.div
          className="mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          <h1 className="font-semibold text-[30px]">Contact-Me</h1>
          <p className="opacity-80">How Can I Help You?</p>
        </motion.div>
        <div className="w-full flex flex-col lg:flex-row lg:justify-between space-y-10 lg:space-y-0">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <div className="space-y-2">
              {contacts.length > 0 ?
                contacts.map((contact) => (
                <motion.div
                  key={contact._id}
                  className="flex items-center gap-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2}}
                  variants={itemVariants}
                >
                  <img src={contact.icon} className=" w-6" />
                  <span className="text-left opacity-80">
                    <h1 className="font-semibold text-[18px]">{contact.title}</h1>
                    <p>{contact.link}</p>
                  </span>
                </motion.div>
                ))
                :
                <p className="text-gray-400">No contacts available</p>
            }
            </div>

            {/* Social Links */}
            <motion.div
              initial="shadow"
              variants={itemVariants}
            >
              <div className="flex gap-3 py-5 items-center justify-center">
                {
                  socials.map( social => (
                  <Link key={social.icon}
                  className="w-[48px]"
                  to={social.link}>
                  <motion.img
                    className="w-10 h-auto cursor-pointer"
                    src={social.icon}
                    alt={social.icon}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                  ))
                }
              </div>
            </motion.div>
          </motion.div>
          <motion.form
            onSubmit={onSubmit}
            className="text-left space-y-4 w-full lg:w-2/3 lg:pl-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={formVariants}
          >
            <div className="relative">
              <div className="px-4 py-2 rounded-md bg-gray-800">
                <p className="opacity-80 text-sm">Full Name</p>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={(e) => inputOnChange('name', e.target.value)}
                  value={data.name}
                  className="w-full bg-transparent focus:ring-0 focus:outline-0 text-white text-sm"
                />
              </div>
              <p className="text-red-500 text-xs mt-1 hidden">Name is required.</p>
            </div>
            <div className="relative">
              <div className="px-4 py-2 rounded-md bg-gray-800">
                <p className="opacity-80 text-sm">Email Address</p>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={(e) => inputOnChange('email', e.target.value)}
                  value={data.email}
                  className="w-full bg-transparent focus:ring-0 focus:outline-0 text-white text-sm"
                />
              </div>
              <p className="text-red-500 text-xs mt-1 hidden">Valid email is required.</p>
            </div>
            <div className="relative">
              <div className="px-4 py-2 rounded-md bg-gray-800">
                <p className="opacity-80 text-sm">Subject</p>
                <input
                  type="text"
                  name="subject"
                  required
                  onChange={(e) => inputOnChange('subject', e.target.value)}
                  value={data.subject}
                  className="w-full bg-transparent focus:ring-0 focus:outline-0 text-white text-sm"
                />
              </div>
              <p className="text-red-500 text-xs mt-1 hidden">Subject is required.</p>
            </div>
            <div className="relative">
              <div className="px-4 py-2 rounded-md bg-gray-800">
                <p className="opacity-80 text-sm">Message</p>
                <textarea
                  rows={4}
                  name="message"
                  required
                  onChange={(e) => inputOnChange('message', e.target.value)}
                  value={data.message}
                  className="w-full bg-transparent focus:ring-0 focus:outline-0 text-white text-sm"
                />
              </div>
              <p className="text-red-500 text-xs mt-1 hidden">Please, leave me a message.</p>
            </div>
            <div className="flex justify-center items-center">
              <motion.button
                type="submit"
                className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700 text-white font-semibold text-sm"
                variants={buttonVariants}
                whileHover="hover"
              >
                Send message <IoSend />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;