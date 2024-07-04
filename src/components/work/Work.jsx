import { useState, useEffect } from "react";
import { recent } from "../../assets";
import { motion, useAnimation } from "framer-motion";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../../assets";
import { FaArrowRightLong } from "react-icons/fa6";

const Work = () => {
  const [workhover, setWorkHover] = useState({
    key1: false,
    key2: false,
    key3: false,
    key4: false,
    key5: false,
    key6: false,
  });

  const controls = useAnimation();

  const updateStateForKey = (key, newValue) => {
    setWorkHover((prevState) => ({
      ...prevState,
      [key]: newValue,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="work"
      className="py-10 lg:max-w-6xl mx-auto relative mt-[5rem] px-[2rem]"
    >
      <img
        src={recent}
        alt=""
        className="absolute lg:left-[-2rem] left-0 w-[50px] top-[1rem]"
      />
      <div className="mb-[5rem]">
        <p className="text-[20px] font-bold leading-[24px] mb-4 font-Manrop bg-clip-text text-transparent bg-gradient-to-r from-[#419BDA] to-[#FB0452]">
          MY WORK
        </p>
        <div className="flex flex-col sm:flex-row lg:justify-between lg:items-start justify-center items-start">
          <h2 className="text-[26px] lg:text-[36px] font-extrabold leading-[43.2px] text-[#202942] font-Manrop w-full lg:w-[450px]">
            Some of my Recent Work
          </h2>
          {/* <div className="w-full lg:w-[400px] mt-8 flex justify-between items-center">
            <div>
              <h2 className="text-[45px] font-extrabold leading-[45px] text-[#202942] font-Manrop w-full lg:w-[250px]">
                {count} K
              </h2>
              <p className="text-[15px] font-semibold leading-[28px] text-[#202942] font-Manrop w-full lg:w-[250px]">
                Completed Project
              </p>
            </div>
            <div>
              <h2 className="text-[45px] font-extrabold leading-[45px] text-[#202942] font-Manrop w-full lg:w-[250px]">
                95%
              </h2>
              <p className="text-[15px] font-semibold leading-[28px] text-[#202942] font-Manrop w-full lg:w-[250px]">
                Positive Rating
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex justify-between items-center gap-6 flex-col sm:flex-row">
        <div
          className="w-full lg:w-[400px] relative"
          onMouseEnter={() => updateStateForKey("key1", true)}
          onMouseLeave={() => updateStateForKey("key1", false)}
        >
          <img src={project1} alt="" srcset="" />
          {workhover.key1 && (
            <motion.div
              className={` flex w-full justify-between items-center px-6 ${
                workhover.key1
                  ? "bg-white h-[60px] w-full absolute bottom-0"
                  : "bg-white h-[60px] w-full absolute bottom-0"
              }`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="text-[12px] text-[#202942] font-Manrop font-semibold leading-[18px]">
                  React and Node JS, Mongo DB.
                </p>
                <a
                  // href="https://amazonstores.netlify.app/"
                  target="_blank"
                  className="text-[14px] text-[#FB0452] font-Manrop font-semibold leading-[18px]"
                >
                  Ecommerce
                </a>
              </div>
              <a
                // href="https://amazonstores.netlify.app/"
                target="_blank"
                className="rounded-full p-[8px] border-2 border-[#202942]"
              >
                <FaArrowRightLong />
              </a>
            </motion.div>
          )}
        </div>
        <div
          className="w-full lg:w-[400px] relative"
          onMouseEnter={() => updateStateForKey("key2", true)}
          onMouseLeave={() => updateStateForKey("key2", false)}
        >
          <img src={project2} alt="" srcset="" />
          {workhover.key2 && (
            <motion.div
              className={` flex w-full justify-between items-center px-6 ${
                workhover.key2
                  ? "bg-white h-[60px] w-full absolute bottom-0"
                  : "bg-white h-[60px] w-full absolute bottom-0"
              }`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="text-[12px] text-[#202942] font-Manrop font-semibold leading-[18px]">
                  React Js and Node JS, MySQL DB, Typescript.
                </p>
                <a
                  href="https://admin.nicetel.com.ng/"
                  target="_blank"
                  className="text-[14px] text-[#FB0452] font-Manrop font-semibold leading-[18px]"
                >
                  Nicetel Admin.
                </a>
              </div>
              <a
                href="https://admin.nicetel.com.ng/"
                target="_blank"
                className="rounded-full p-[8px] border-2 border-[#202942]"
              >
                <FaArrowRightLong />
              </a>
            </motion.div>
          )}
        </div>
        <div
          className="w-full lg:w-[400px] relative"
          onMouseEnter={() => updateStateForKey("key3", true)}
          onMouseLeave={() => updateStateForKey("key3", false)}
        >
          <img src={project3} alt="" srcset="" />
          {workhover.key3 && (
            <motion.div
              className={` flex w-full justify-between items-center px-6 ${
                workhover.key3
                  ? "bg-white h-[60px] w-full absolute bottom-0"
                  : "bg-white h-[60px] w-full absolute bottom-0"
              }`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="text-[12px] text-[#202942] font-Manrop font-semibold leading-[18px]">
                  React JS
                </p>
                <a
                  href="https://mrraph.netlify.app"
                  target="_blank"
                  className="text-[14px] text-[#FB0452] font-Manrop font-semibold leading-[18px]"
                >
                  Personal Portfolio
                </a>
              </div>
              <a
                href="https://mrraph.netlify.app"
                target="_blank"
                className="rounded-full p-[8px] border-2 border-[#202942]"
              >
                <FaArrowRightLong />
              </a>
            </motion.div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center gap-6 mt-6 flex-col sm:flex-row">
        <div
          className="w-full lg:w-[400px] relative"
          onMouseEnter={() => updateStateForKey("key4", true)}
          onMouseLeave={() => updateStateForKey("key4", false)}
        >
          <img src={project4} alt="" srcset="" />
          {workhover.key4 && (
            <motion.div
              className={` flex w-full justify-between items-center px-6 ${
                workhover.key4
                  ? "bg-white h-[60px] w-full absolute bottom-0"
                  : "bg-white h-[60px] w-full absolute bottom-0"
              }`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="text-[12px] text-[#202942] font-Manrop font-semibold leading-[18px]">
                  React Native and Node JS (Coming Soon)
                </p>
                <a
                  // href="https://srep.appmart.ng"
                  target="_blank"
                  className="text-[14px] text-[#FB0452] font-Manrop font-semibold leading-[18px]"
                >
                  Agrify Mobile App
                </a>
              </div>
              <a
                // href="https://srep.appmart.ng"
                target="_blank"
                className="rounded-full p-[8px] border-2 border-[#202942]"
              >
                <FaArrowRightLong />
              </a>
            </motion.div>
          )}
        </div>
        <div
          className="w-full lg:w-[400px] relative"
          onMouseEnter={() => updateStateForKey("key5", true)}
          onMouseLeave={() => updateStateForKey("key5", false)}
        >
          <img src={project5} alt="" srcset="" />
          {workhover.key5 && (
            <motion.div
              className={` flex w-full justify-between items-center px-6 ${
                workhover.key5
                  ? "bg-white h-[60px] w-full absolute bottom-0"
                  : "bg-white h-[60px] w-full absolute bottom-0"
              }`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="text-[12px] text-[#202942] font-Manrop font-semibold leading-[18px]">
                  React JS, Tailwind
                </p>
                <button className="text-[14px] text-[#FB0452] font-Manrop font-semibold leading-[18px]">
                  Personal Porfolio
                </button>
              </div>
              <button
                disabled
                className="rounded-full p-[8px] border-2 border-[#202942]"
              >
                <FaArrowRightLong />
              </button>
            </motion.div>
          )}
        </div>
        <div
          className="w-full lg:w-[400px] relative"
          onMouseEnter={() => updateStateForKey("key6", true)}
          onMouseLeave={() => updateStateForKey("key6", false)}
        >
          <img src={project6} alt="" srcset="" />
          {workhover.key6 && (
            <motion.div
              className={` flex w-full justify-between items-center px-6 ${
                workhover.key6
                  ? "bg-white h-[60px] w-full absolute bottom-0"
                  : "bg-white h-[60px] w-full absolute bottom-0"
              }`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="text-[12px] text-[#202942] font-Manrop font-semibold leading-[18px]">
                  Vue JS, Tailwind
                </p>
                <button className="text-[14px] text-[#FB0452] font-Manrop font-semibold leading-[18px]">
                  Mind Store
                </button>
              </div>
              <button
                disabled
                className="rounded-full p-[8px] border-2 border-[#202942]"
              >
                <FaArrowRightLong />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
