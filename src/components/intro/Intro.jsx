import React from "react";
import { motion } from "framer-motion";
import {  resume, NewImage } from "../../assets";
import { FaLinkedin, FaTwitter, FaGithubAlt } from "react-icons/fa6";

const Intro = () => {
  const introsentence = "Hi, My name is".split("");
  const name = "Raphael Emehelu".split("");

  const transform = [
    "scale3d(1, 1, 1)",
    "scale3d(1.4, .55, 1)",
    "scale3d(.75, 1.25, 1)",
    "scale3d(1.25, .85, 1)",
    "scale3d(.9, 1.05, 1)",
    "scale3d(1, 1, 1)",
  ];
  const boxVariants = {
    initial: { backgroundColor: "#202942" },
    hover: { backgroundColor: "#FF014F" },
  };

  const textVariants = {
    initial: { color: "#202942" },
    hover: { color: "#FF014F" },
  };

  return (
    <section
      id="#"
      className="py-0 lg:h-[90vh] pt-[6rem]  lg:max-w-7xl lg:mx-auto lg:pt-[1rem] flex flex-col sm:flex-row lg:justify-between lg:items-end pb-20 justify-center items-start"
    >
      <div className="fixed right-0 bg-transparent lg:bg-white ng px-5 py-2 top-[16rem] flex flex-col z-10">
        <motion.a
          href="https://www.linkedin.com/in/raphael-emehelu-20724b13a/"
          target="_blank"
          initial="initial"
          whileHover="hover"
          variants={textVariants}
          transition={{ duration: 0.5 }}
        >
          <FaLinkedin className="my-4" />
        </motion.a>
        <motion.a
          href="https://twitter.com/RaphaelEmehelu"
          target="_blank"
          initial="initial"
          whileHover="hover"
          variants={textVariants}
          transition={{ duration: 0.5 }}
        >
          <FaTwitter className="my-4" />
        </motion.a>
        <motion.a
          href="https://github.com/rafaelpascal"
          target="_blank"
          initial="initial"
          whileHover="hover"
          variants={textVariants}
          transition={{ duration: 0.5 }}
        >
          <FaGithubAlt className="my-4" />
        </motion.a>
      </div>
      <motion.div className="w-full lg:w-[70%] pl-5 lg:pl-[5rem]">
        {/* <h1 className="text-stroke-transparent text-[70px] lg:text-[104px] mt-[4rem] text-[#202942] uppercase font-bold">
          Welcome
        </h1> */}
        <div>

        {introsentence.map((letter, index) => {
          return (
            <motion.h2
              key={index}
              className="text-[40px] leading-[72px] text-[#202942] inline-block font-DancingScript font-normal cursor-pointer"
              whileHover={{ transform }}
            >
              {letter === " " ? "\u00a0" : letter}
            </motion.h2>
          );
        })}
        </div>
        <div>
        {name.map((letter, index) => {
          return (
            <motion.h2
              key={index}
              className="text-[40px] lg:text-[80px] leading-[72px] text-[#202942] inline-block font-Manrop font-bold cursor-pointer"
              whileHover={{ transform }}
            >
              {letter === " " ? "\u00a0" : letter}
            </motion.h2>
          );
        })}
        </div>
        <div className="text-[24px] lg:text-[30px] font-bold leading-[36px] text-[#202942] mt-2 lg:mt-4">
          <p>Fullstack Web Engineer</p>
          {/* <Typical
            steps={[
              "Frontend Developer",
              10000,
              "Backend Developer",
              10000,
              "Fullstack Developer",
              10000,
            ]}
            loop={Infinity}
            wrapper="h2"
          /> */}
        </div>
        <a href={resume} download="resume.pdf">
          <motion.button
            className="w-[200px] text-[17px] font-semibold font-Manrop leading-[25.5px] text-white rounded-full px-4 py-4 mt-4 lg:mt-[4rem]"
            initial="initial"
            whileHover="hover"
            variants={boxVariants}
            transition={{ duration: 0.5 }}
          >
            My Resume
          </motion.button>
        </a>
      </motion.div>
      <div className="w-full lg:w-[40%] shadow-xl rounded-xl p-2 z-0  flex justify-end items-end">
        <img src={NewImage} alt="" className="w-full rounded-xl border-4 border-gray-800 " />
      </div>
    </section>
  );
};

export default Intro;
