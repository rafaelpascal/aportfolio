import React from "react";
import { motion } from "framer-motion";
import { myImage, resume } from "../../assets";
import Typical from "react-typical";
import { FaLinkedin, FaTwitter, FaGithubAlt } from "react-icons/fa6";

const Intro = () => {
  const introsentence = "Hi, I'm Rafael".split("");

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
      className="py-0 lg:max-w-7xl lg:mx-auto pt-[1rem] lg:pt-0 flex flex-col sm:flex-row lg:justify-between lg:items-start justify-center items-start"
    >
      <div className="fixed right-0 bg-white ng px-5 py-2 top-[16rem] flex flex-col z-10">
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
      <motion.div className="w-full lg:w-[50%] pl-5 lg:pl-[5rem]">
        <h1 className="text-stroke-transparent text-[70px] lg:text-[104px] mt-[4rem] text-[#202942] uppercase font-bold">
          Welcome
        </h1>
        {introsentence.map((letter, index) => {
          return (
            <motion.h2
              key={index}
              className="text-[40px] lg:text-[70px] leading-[72px] text-[#202942] inline-block font-Manrop font-bold cursor-pointer"
              whileHover={{ transform }}
            >
              {letter === " " ? "\u00a0" : letter}
            </motion.h2>
          );
        })}
        <div className="text-[24px] lg:text-[30px] font-bold leading-[36px] text-[#202942] underline mt-2 lg:mt-4">
          <Typical
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
          />
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
      <div className="w-full lg:w-[50%] z-0  flex justify-end items-end">
        <img src={myImage} alt="" className="w-full lg:w-[630px]" />
      </div>
    </section>
  );
};

export default Intro;
