import { useState, useEffect } from "react";
import { node, vue, react, javascript, me } from "../../assets";
import { motion } from "framer-motion";
const About = () => {
  const [progress, setProgress] = useState({
    key1: 0,
    key2: 0,
    key3: 0,
    key4: 0,
  });
  const [skills, setSkills] = useState({
    key1: true,
    key2: false,
    key3: false,
  });
  const boxVariants = {
    initial: { backgroundColor: "#fff", color: "#202942" },
    hover: { backgroundColor: "#202942", color: "#fff" },
    active: { backgroundColor: "#202942", color: "#fff" },
    Inactive: { backgroundColor: "#fff", color: "#202942" },
  };
  const updateStateForKey = (key, newValue) => {
    setSkills((prevState) => ({
      ...prevState,
      [key]: newValue,
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => ({
        ...prevProgress,
        key1: prevProgress < 90 ? prevProgress + 5 : 90,
        key2: prevProgress < 80 ? prevProgress + 10 : 80,
        key3: prevProgress < 75 ? prevProgress + 8 : 75,
        key4: prevProgress < 80 ? prevProgress + 8 : 80,
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBioToggle = () => {
    setSkills({
      key1: true,
      key2: false,
      key3: false,
    });
  };

  const handleSkillsToggle = () => {
    setSkills({
      key1: false,
      key2: true,
      key3: false,
    });
  };

  const handleEduToggle = () => {
    setSkills({
      key1: false,
      key2: false,
      key3: true,
    });
  };
  return (
    <section
      id="about"
      className="py-10 lg:max-w-6xl mx-auto px-[2rem] mt-[4rem] relative"
    >
      {/* <div className="w-full lg:w-[40%] bg-[#FB0846] opacity-25 h-[440px] rounded-full left-[-5px] bottom-[5px] absolute z-10"></div> */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 z-0 mb-[15rem] lg:mb-[5rem]">
        <div className="w-full lg:w-[40%] bg-transparent h-[440px] rounded-full z-0">
          <motion.img
            src={me}
            alt=""
            className="w-full"
            whileHover={{ x: 20 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="mb-[5rem]">
            <p className="text-[20px] font-bold leading-[24px] text-left mb-4 font-Manrop bg-clip-text text-transparent bg-gradient-to-r from-[#419BDA] to-[#FB0452]">
              ABOUT ME
            </p>
            <h2 className="w-full lg:w-[300px] text-[36px] font-extrabold leading-[43.2px] text-[#202942] font-Manrop">
              I Can Develop.
            </h2>
            <p className="text-[15px] text-[#666666] font-Manrop text-justify mt-8 leading-[25.5px] font-normal mb-4">
              A skilled software developer with over 2 years of experience, I am
              committed to delivering cost-effective and timely results while
              working within project specifications. With a strong passion for
              technology and a keen interest in learning, I am always looking
              for ways to grow and advance my skills. I am excited to be a part
              of a team that is dedicated to creating innovative and impactful
              products, and I am confident in my ability to make a positive
              contribution to any project.
            </p>

            <div className="flex justify-between items-start flex-col gap-4 mt-11">
              <div className="flex justify-start gap-4 lg:gap-20 items-center">
                <img src={node} alt="" className="w-[70px]" />
                <div>
                  <h2 className="text-[20px] font-bold font-Manrop leading-[24px] text-[#202942]">
                    Full stack Developer
                  </h2>
                  <p className="text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] mb-4 font-semibold">
                    Appmart Integrated Limited.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          background: "linear-gradient(to right, #FCF8E4, #F8FFFF)",
        }}
        animate={{ background: "linear-gradient(to right, #FCF8E4, #F8FFFF)" }}
        className="w-full relative border-2 border-[#fff] flex justify-center items-center flex-col"
      >
        <div className="w-full lg:w-[80%] bg-transparent lg:bg-white gap-4 lg:gap-6 p-2 absolute top-[-15rem] lg:top-[-2rem] rounded-full flex flex-col sm:flex-row justify-between items-center">
          <motion.button
            className="text-[18px] font-bold font-Manrop leading-[24px]  w-full py-[15px] rounded-full"
            initial="initial"
            whileHover="hover"
            animate={skills.key1 ? "active" : "inactive"}
            variants={boxVariants}
            transition={{ duration: 0.5 }}
            onClick={handleBioToggle}
          >
            Biography - 01
          </motion.button>
          <motion.button
            className="text-[18px] font-bold font-Manrop leading-[24px] w-full py-[15px] rounded-full"
            initial="initial"
            whileHover="hover"
            animate={skills.key2 ? "active" : "inactive"}
            variants={boxVariants}
            transition={{ duration: 0.5 }}
            onClick={handleSkillsToggle}
          >
            Skills - 01
          </motion.button>
          <motion.button
            className="text-[18px] font-bold font-Manrop leading-[24px] w-full py-[15px] rounded-full"
            initial="initial"
            whileHover="hover"
            animate={skills.key3 ? "active" : "inactive"}
            variants={boxVariants}
            transition={{ duration: 0.5 }}
            onClick={handleEduToggle}
          >
            Education - 01
          </motion.button>
        </div>

        {skills.key1 && (
          <div className="flex flex-col sm:flex-row w-full justify-between gap-20 items-center lg:px-[6rem] py-[2rem] lg:py-[4rem]">
            <div className="w-full px-4 lg:w-[50%]">
              <div className="flex justify-between items-center border-b-[1.5px] py-3 border-[#666666]">
                <h2 className="text-[14px] lg:text-[18px] font-bold font-Manrop leading-[24px] text-[#202942]">
                  Name
                </h2>
                <p className="text-[12px] lg:text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-semibold">
                  Emehelu Raphael O.
                </p>
              </div>
              <div className="flex justify-between items-center border-b-[1.5px] py-3 border-[#666666]">
                <h2 className="text-[14px] lg:text-[18px] font-bold font-Manrop leading-[24px] text-[#202942]">
                  Area of Expertise
                </h2>
                <p className="text-[12px] lg:text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-semibold">
                  Web Development
                </p>
              </div>
              <div className="flex justify-between items-center border-b-[1.5px] py-3 border-[#666666]">
                <h2 className="text-[14px] lg:text-[18px] font-bold font-Manrop leading-[24px] text-[#202942]">
                  Nationality
                </h2>
                <p className="text-[12px] lg:text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-semibold">
                  Nigeria
                </p>
              </div>
              <div className="flex justify-between items-center border-b-[1.5px] py-3 border-[#666666]">
                <h2 className="text-[14px] lg:text-[18px] font-bold font-Manrop leading-[24px] text-[#202942]">
                  Course of Study
                </h2>
                <p className="text-[12px] lg:text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-semibold">
                  Computer Science
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-[50%]">
              <div className="flex justify-between items-center border-b-[1.5px] py-3 border-[#666666]">
                <h2 className="text-[14px] lg:text-[18px] font-bold font-Manrop leading-[24px] text-[#202942]">
                  Education
                </h2>
                <p className="text-[12px] lg:text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-semibold">
                  Higher National Deploma
                </p>
              </div>
              <div className="flex justify-between items-center border-b-[1.5px] py-3 border-[#666666]">
                <h2 className="text-[14px] lg:text-[18px] font-bold font-Manrop leading-[24px] text-[#202942]">
                  Address
                </h2>
                <p className="text-[12px] lg:text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-semibold">
                  Prince and Princess Estate, FCT Abuja
                </p>
              </div>
              <div className="flex justify-between items-center border-b-[1.5px] py-3 border-[#666666]">
                <h2 className="text-[14px] lg:text-[18px] font-bold font-Manrop leading-[24px] text-[#202942]">
                  Years of Experience
                </h2>
                <p className="text-[12px] lg:text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-semibold">
                  3 +
                </p>
              </div>
              <div className="flex justify-between items-center border-b-[1.5px] py-3 border-[#666666]">
                <h2 className="text-[14px] lg:text-[18px] font-bold font-Manrop leading-[24px] text-[#202942]">
                  Preferred Language
                </h2>
                <p className="text-[12px] lg:text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-semibold">
                  English
                </p>
              </div>
            </div>
          </div>
        )}
        {skills.key2 && (
          <div className="flex w-[100%] justify-between gap-20 items-center lg:px-[6rem] py-[2rem] lg:py-[4rem]">
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
              <div className="w-full flex justify-between items-start flex-col gap-4 mt-11">
                <div className="w-full flex flex-col sm:flex-row justify-between gap-4 lg:gap-20 items-center">
                  <div className="flex w-full lg:w-[50%] flex-col sm:flex-row justify-start gap-6 lg:gap-12 items-center">
                    <img src={javascript} alt="" className="w-[50px]" />
                    <h2 className="text-[20px] font-bold font-Manrop leading-[24px] text-[#202942]">
                      Javascript
                    </h2>
                  </div>
                  <div className="w-full lg:w-[50%] flex flex-col sm:flex-row justify-start gap-4 items-center">
                    <h2 className="text-[16px] lg:text-[30px] font-bold font-Manrop leading-[24px] text-[#202942]">{`${progress.key1}%`}</h2>
                    <div
                      style={{
                        borderRadius: "50px",
                        width: `${progress.key1}%`,
                        height: "10px",
                        backgroundColor: "#FF014F",
                        transition: "width 0.5s ease-in-out",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row  justify-between gap-4 lg:gap-20 items-center">
                  <div className="flex w-full lg:w-[50%] flex-col sm:flex-row justify-start gap-6 lg:gap-12 items-center">
                    <img src={node} alt="" className="w-[50px]" />
                    <h2 className="text-[20px] font-bold font-Manrop leading-[24px] text-[#202942]">
                      Backend with Node JS
                    </h2>
                  </div>
                  <div className="w-full lg:w-[50%] flex flex-col sm:flex-row justify-start gap-4 items-center">
                    <h2 className="text-[16px] lg:text-[30px] font-bold font-Manrop leading-[24px] text-[#202942]">{`${progress.key2}%`}</h2>
                    <div
                      style={{
                        borderRadius: "50px",
                        width: `${progress.key2}%`,
                        height: "10px",
                        backgroundColor: "#FF014F",
                        transition: "width 0.5s ease-in-out",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row  justify-between gap-4 lg:gap-20 items-center">
                  <div className="flex w-full lg:w-[50%] flex-col sm:flex-row justify-start gap-6 lg:gap-12 items-center">
                    <img src={react} alt="" className="w-[50px]" />
                    <h2 className="text-[20px] font-bold font-Manrop leading-[24px] text-[#202942]">
                      Frontend with React JS
                    </h2>
                  </div>
                  <div className="w-full lg:w-[50%] flex flex-col sm:flex-row justify-start gap-4 items-center">
                    <h2 className="text-[16px] lg:text-[30px] font-bold font-Manrop leading-[24px] text-[#202942]">{`${progress.key3}%`}</h2>
                    <div
                      style={{
                        borderRadius: "50px",
                        width: `${progress.key3}%`,
                        height: "10px",
                        backgroundColor: "#FF014F",
                        transition: "width 0.5s ease-in-out",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row justify-between gap-4 lg:gap-20 items-center">
                  <div className="flex w-full lg:w-[50%] flex-col sm:flex-row justify-start gap-6 lg:gap-12 items-center">
                    <img src={vue} alt="" className="w-[50px]" />
                    <h2 className="text-[20px] font-bold font-Manrop leading-[24px] text-[#202942]">
                      Frontend with Vue JS
                    </h2>
                  </div>
                  <div className="w-full lg:w-[50%] flex flex-col sm:flex-row justify-start gap-4 items-center">
                    <h2 className="text-[16px] lg:text-[30px] font-bold font-Manrop leading-[24px] text-[#202942]">{`${progress.key4}%`}</h2>
                    <div
                      style={{
                        borderRadius: "50px",
                        width: `${progress.key4}%`,
                        height: "10px",
                        backgroundColor: "#FF014F",
                        transition: "width 0.5s ease-in-out",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {skills.key3 && (
          <div className="flex w-full flex-col justify-between gap-20 items-center lg:px-[6rem] py-[2rem] lg:py-[4rem]">
            <div className="w-full flex justify-between mt-10 items-center gap-8 flex-col sm:flex-row">
              <div className="w-full lg:w-[30%] border-l-[2px] border-[#FF014F] relative px-3 lg:px-6">
                <div className="h-[20px] w-[20px] rounded-full border-4 absolute top-[-16px] left-[-11px] border-[#FF014F]"></div>
                <h2 className="text-[20px] font-bold font-Manrop capitalize leading-[24px] text-[#202942]">
                  Computer Science
                </h2>
                <p className="text-[14px] font-semibold capitalize my-4 font-Manrop leading-[24px] text-[#202942]">
                  CONVENANT POLYTECHNIC
                </p>
                <h2 className="bg-[#FF014F] text-white mb-4 font-bold text-[15px] w-[50%] p-2">
                  2012 - 2014
                </h2>
              </div>
              <div className="w-full lg:w-[30%] border-l-[2px] border-[#FF014F] relative px-3 lg:px-6">
                <div className="h-[20px] w-[20px] rounded-full border-4 absolute top-[-16px] left-[-11px] border-[#FF014F]"></div>
                <h2 className="text-[20px] font-bold capitalize font-Manrop leading-[24px] text-[#202942]">
                  Computer Science.
                </h2>
                <p className="text-[14px] font-semibold capitalize my-4 font-Manrop leading-[24px] text-[#202942]">
                  FEDERAL POLYTECHNIC OKO
                </p>
                <h2 className="bg-[#FF014F] text-white mb-4 font-bold text-[15px] w-[50%] p-2">
                  2014 - 2016
                </h2>
              </div>
              <div className="w-full lg:w-[30%] border-l-[2px] border-[#FF014F] relative px-3 lg:px-6">
                <div className="h-[20px] w-[20px] rounded-full border-4 absolute top-[-16px] left-[-11px] border-[#FF014F]"></div>
                <h2 className="text-[20px] font-bold capitalize font-Manrop leading-[24px] text-[#202942]">
                  Web Development.
                </h2>
                <p className="text-[14px] font-semibold capitalize my-4 font-Manrop leading-[24px] text-[#202942]">
                  DEVAMPLIFY
                </p>
                <h2 className="bg-[#FF014F] text-white mb-4 font-bold text-[15px] w-[50%] p-2">
                  2019 - 2020
                </h2>
              </div>
            </div>
            <div className="w-full flex justify-between items-center gap-8 flex-col sm:flex-row">
              <div className="w-full lg:w-[50%] border-l-[2px] border-[#FF014F] relative px-3 lg:px-6">
                <div className="h-[20px] w-[20px] rounded-full border-4 absolute top-[-16px] left-[-11px] border-[#FF014F]"></div>
                <h2 className="text-[20px] font-bold font-Manrop leading-[24px] text-[#202942]">
                  JavaScript Basics.
                </h2>
                <p className="text-[14px] font-semibold my-4 font-Manrop leading-[24px] text-[#202942]">
                  CODEDAMN
                </p>
                <h2 className="bg-[#FF014F] text-white mb-4 font-bold text-[15px] w-[50%] p-2">
                  2022
                </h2>
              </div>
              <div className="w-full lg:w-[50%] border-l-[2px] border-[#FF014F] relative px-3 lg:px-6">
                <div className="h-[20px] w-[20px] rounded-full border-4 absolute top-[-16px] left-[-11px] border-[#FF014F]"></div>
                <h2 className="text-[20px] font-bold font-Manrop leading-[24px] text-[#202942]">
                  JavaScript: ES6.
                </h2>
                <p className="text-[14px] font-semibold my-4 font-Manrop leading-[24px] text-[#202942]">
                  PIRPLEI
                </p>
                <h2 className="bg-[#FF014F] text-white mb-4 font-bold text-[15px] w-[50%] p-2">
                  2022
                </h2>
              </div>
              <div className="w-full lg:w-[50%] border-l-[2px] border-[#FF014F] relative px-3 lg:px-6">
                <div className="h-[20px] w-[20px] rounded-full border-4 absolute top-[-16px] left-[-11px] border-[#FF014F]"></div>
                <h2 className="text-[20px] font-bold font-Manrop leading-[24px] text-[#202942]">
                  Node Js
                </h2>
                <p className="text-[14px] font-semibold my-4 font-Manrop leading-[24px] text-[#202942]">
                  CODEDAMN
                </p>
                <h2 className="bg-[#FF014F] text-white mb-4 font-bold text-[15px] w-[50%] p-2">
                  2020
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
