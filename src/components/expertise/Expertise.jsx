import React from "react";
import { motion } from "framer-motion";
import { pencil, appDev, backend } from "../../assets";
import line from "../../assets/icons/line.webp";

const Expertise = () => {
  const textVariants = {
    initial: { color: "#202942" },
    hover: { color: "#FF014F" },
  };
  return (
    <motion.section
      id="service"
      className="py-[6rem] relative lg:max-w-6xl mx-auto px-8 flex flex-col justify-between items-center z-0"
      style={{
        width: "100%",
        background: "linear-gradient(to right, #FFF, #E2F3EA)",
      }}
      animate={{ background: "linear-gradient(to right, #FFF, #E2F3EA)" }}
    >
      <div className="mb-[5rem]">
        <p className="text-[20px] font-bold leading-[24px] text-center mb-4 font-Manrop bg-clip-text text-transparent bg-gradient-to-r from-[#419BDA] to-[#FB0452]">
          MY EXPERTISE
        </p>
        <h2 className="text-[36px] font-extrabold leading-[43.2px] text-[#202942] font-Manrop">
          What I Do
        </h2>
        <div className="flex justify-center items-center mt-4">
          <div className="w-[20px] h-[2px] bg-[#FB0452] mr-4"></div>
          <div className="w-[80px] h-[2px] bg-[#FB0452]"></div>
        </div>
      </div>
      <div className="flex w-full flex-col sm:flex-row lg:justify-between lg:items-start justify-center items-start">
        <div className="px-0 w-full lg:w-[30%] lg:px-4">
          <img src={pencil} alt="Web" className="w-[80px] mb-12" />
          <motion.h2
            className="text-[20px] font-Manrop leading-[24px] font-bold mb-4 cursor-pointer"
            initial="initial"
            whileHover="hover"
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            Frontend Development
          </motion.h2>
          <p className="text-[15px] h-[100px] w-full text-[#666666] font-Manrop leading-[25.5px] font-normal mb-4">
            I can transform a figma design into a well responsive Web App using
            React Js, Vue Js.
          </p>
        </div>
        <div className="border-none w-full lg:w-[35%] lg:border-x-[2px] lg:border-[#E3E7F5] px-0 lg:px-6">
          <img src={appDev} alt="Web" className="w-[80px] mb-8" />
          <motion.h2
            className="text-[20px] font-Manrop leading-[24px] font-bold mb-4 cursor-pointer"
            initial="initial"
            whileHover="hover"
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            Backend Development
          </motion.h2>
          <p className="text-[15px] h-[100px] w-full text-[#666666] font-Manrop leading-[25.5px] font-normal mb-4">
            With Node Js i am able to work on any Backend project, I am very
            good with Mongo DB, MySql, Postgress.
          </p>
        </div>
        <div className="px-0 w-full lg:w-[35%] lg:px-4">
          <img src={backend} alt="Web" className="w-[80px] mb-8" />
          <motion.h2
            className="text-[20px] font-Manrop leading-[24px] font-bold mb-4 cursor-pointer"
            initial="initial"
            whileHover="hover"
            variants={textVariants}
            transition={{ duration: 0.5 }}
          >
            Mentorship
          </motion.h2>
          <p className="text-[15px] h-[100px] w-full text-[#666666] font-Manrop leading-[25.5px] font-normal mb-4">
            With the Knowledge i have in web Development i can Lecture and
            mentor anyone who is willing to learn web Development.
          </p>
        </div>
      </div>
      <img
        srcSet={line}
        alt=""
        className="absolute w-[200px] bottom-0 right-0"
      />
    </motion.section>
  );
};

export default Expertise;
