import { useState, useEffect } from "react";
import {
  IoHomeOutline,
  IoSettingsOutline,
  IoBriefcaseOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { menu, close } from "../../assets";

const Sidenav = () => {
  const [toggle, setToggle] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 840);
  const [hover, setHover] = useState({
    key1: false,
    key2: false,
    key3: false,
    key4: false,
    key5: false,
    key6: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 840);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const updateStateForKey = (key, newValue) => {
    setHover((prevState) => ({
      ...prevState,
      [key]: newValue,
    }));
  };

  return (
    <div className="relative z-10 ">
      {isSmallScreen ? (
        <div className="fixed top-0 p-6 left-0 w-[100%]">
          <button className="backdrop-filter backdrop-blur-xl p-[1rem] rounded-3xl">
            <img
              src={toggle ? close : menu}
              alt="Menu"
              className="w-[30px]"
              onClick={() => setToggle(!toggle)}
            />
            {toggle && (
              <div
                className={`${
                  !toggle
                    ? "hidden"
                    : "flex justify-center items-center w-[300px] h-full p-4"
                }`}
              >
                <div className="w-full">
                  <a
                    href="#"
                    className="w-full my-4"
                    onMouseEnter={() => updateStateForKey("key1", true)}
                    onMouseLeave={() => updateStateForKey("key1", false)}
                  >
                    {hover.key1 ? (
                      <motion.p
                        className="text-[14px] font-bold text-[#202942] leading-[32px] font-Manrop py-4 w-full border-b-[2px] text-center uppercase border-[#E6F8F8] hover:text-[#FF014F]"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ duration: 0.5 }}
                      >
                        Home
                      </motion.p>
                    ) : (
                      <IoHomeOutline className="text-[4rem] text-[#202942] font-normal w-full border-b-[2px] py-4 border-[#E6F8F8] hover:text-[#FF014F]" />
                    )}
                  </a>
                  <a
                    href="#service"
                    className="w-full my-4"
                    onMouseEnter={() => updateStateForKey("key2", true)}
                    onMouseLeave={() => updateStateForKey("key2", false)}
                  >
                    {hover.key2 ? (
                      <motion.p
                        className="text-[14px] font-bold text-[#202942] leading-[32px] font-Manrop py-4 w-full border-b-[2px] text-center uppercase border-[#E6F8F8] hover:text-[#FF014F]"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ duration: 0.5 }}
                      >
                        Services
                      </motion.p>
                    ) : (
                      <IoSettingsOutline className="text-[4rem] text-[#202942] font-normal w-full border-b-[2px] py-4 border-[#E6F8F8] hover:text-[#FF014F]" />
                    )}
                  </a>
                  <a
                    href="#work"
                    className="w-full my-4"
                    onMouseEnter={() => updateStateForKey("key3", true)}
                    onMouseLeave={() => updateStateForKey("key3", false)}
                  >
                    {hover.key3 ? (
                      <motion.p
                        className="text-[14px] font-bold text-[#202942] leading-[32px] font-Manrop py-4 w-full border-b-[2px] text-center uppercase border-[#E6F8F8] hover:text-[#FF014F]"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ duration: 0.5 }}
                      >
                        Portfolio
                      </motion.p>
                    ) : (
                      <IoBriefcaseOutline className="text-[4rem] text-[#202942] font-normal w-full border-b-[2px] py-4 border-[#E6F8F8] hover:text-[#FF014F]" />
                    )}
                  </a>
                  <a
                    href="#about"
                    className="w-full my-4"
                    onMouseEnter={() => updateStateForKey("key4", true)}
                    onMouseLeave={() => updateStateForKey("key4", false)}
                  >
                    {hover.key4 ? (
                      <motion.p
                        className="text-[14px] font-bold text-[#202942] leading-[32px] font-Manrop py-4 w-full border-b-[2px] text-center uppercase border-[#E6F8F8] hover:text-[#FF014F]"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ duration: 0.5 }}
                      >
                        About
                      </motion.p>
                    ) : (
                      <FaRegUser className="text-[4rem] text-[#202942] font-normal w-full border-b-[2px] py-4 border-[#E6F8F8] hover:text-[#FF014F]" />
                    )}
                  </a>
                  <a
                    href="#testimonies"
                    className="w-full my-4"
                    onMouseEnter={() => updateStateForKey("key5", true)}
                    onMouseLeave={() => updateStateForKey("key5", false)}
                  >
                    {hover.key5 ? (
                      <motion.p
                        className="text-[14px] font-bold text-[#202942] leading-[32px] font-Manrop py-4 w-full border-b-[2px] text-center uppercase border-[#E6F8F8] hover:text-[#FF014F]"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ duration: 0.5 }}
                      >
                        Comments
                      </motion.p>
                    ) : (
                      <AiOutlineComment className="text-[4rem] text-[#202942] font-normal w-full border-b-[2px] py-4 border-[#E6F8F8] hover:text-[#FF014F]" />
                    )}
                  </a>
                  <a
                    href="#contact"
                    className="w-full my-4"
                    onMouseEnter={() => updateStateForKey("key6", true)}
                    onMouseLeave={() => updateStateForKey("key6", false)}
                  >
                    {hover.key6 ? (
                      <motion.p
                        className="text-[14px] font-bold text-[#202942] leading-[32px] font-Manrop py-4 w-full border-b-[2px] text-center uppercase border-[#E6F8F8] hover:text-[#FF014F]"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ duration: 0.5 }}
                      >
                        Contact
                      </motion.p>
                    ) : (
                      <IoChatbubblesOutline className="text-[4rem] text-[#202942] font-normal w-full border-b-[2px] py-4 border-[#E6F8F8] hover:text-[#FF014F]" />
                    )}
                  </a>
                </div>
              </div>
            )}
          </button>
        </div>
      ) : (
        <div>
          <div className="bg-white w-[100px] flex justify-between pb-[10rem] flex-col items-center h-[100vh] fixed text-black ">
            <div className="bg-[#FF014F] w-full h-[90px] flex justify-center items-center">
              <h1 className="text-[5rem] font-bold text-yellow-50 font-Lobster">
                R
              </h1>
            </div>
            <div className="w-full">
              <a
                href="#"
                className="w-full my-4"
                onMouseEnter={() => updateStateForKey("key1", true)}
                onMouseLeave={() => updateStateForKey("key1", false)}
              >
                {hover.key1 ? (
                  <motion.p
                    className="text-[14px] font-bold text-[#202942] leading-[32px] font-Manrop py-4 w-full border-b-[2px] text-center uppercase border-[#E6F8F8] hover:text-[#FF014F]"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                  >
                    Home
                  </motion.p>
                ) : (
                  <IoHomeOutline className="text-[4rem] text-[#202942] font-normal w-full border-b-[2px] py-4 border-[#E6F8F8] hover:text-[#FF014F]" />
                )}
              </a>
              <a
                href="#service"
                className="w-full my-4"
                onMouseEnter={() => updateStateForKey("key2", true)}
                onMouseLeave={() => updateStateForKey("key2", false)}
              >
                {hover.key2 ? (
                  <motion.p
                    className="text-[14px] font-bold text-[#202942] leading-[32px] font-Manrop py-4 w-full border-b-[2px] text-center uppercase border-[#E6F8F8] hover:text-[#FF014F]"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                  >
                    Services
                  </motion.p>
                ) : (
                  <IoSettingsOutline className="text-[4rem] text-[#202942] font-normal w-full border-b-[2px] py-4 border-[#E6F8F8] hover:text-[#FF014F]" />
                )}
              </a>
              <a
                href="#work"
                className="w-full my-4"
                onMouseEnter={() => updateStateForKey("key3", true)}
                onMouseLeave={() => updateStateForKey("key3", false)}
              >
                {hover.key3 ? (
                  <motion.p
                    className="text-[14px] font-bold text-[#202942] leading-[32px] font-Manrop py-4 w-full border-b-[2px] text-center uppercase border-[#E6F8F8] hover:text-[#FF014F]"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                  >
                    Portfolio
                  </motion.p>
                ) : (
                  <IoBriefcaseOutline className="text-[4rem] text-[#202942] font-normal w-full border-b-[2px] py-4 border-[#E6F8F8] hover:text-[#FF014F]" />
                )}
              </a>
              <a
                href="#about"
                className="w-full my-4"
                onMouseEnter={() => updateStateForKey("key4", true)}
                onMouseLeave={() => updateStateForKey("key4", false)}
              >
                {hover.key4 ? (
                  <motion.p
                    className="text-[14px] font-bold text-[#202942] leading-[32px] font-Manrop py-4 w-full border-b-[2px] text-center uppercase border-[#E6F8F8] hover:text-[#FF014F]"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                  >
                    About
                  </motion.p>
                ) : (
                  <FaRegUser className="text-[4rem] text-[#202942] font-normal w-full border-b-[2px] py-4 border-[#E6F8F8] hover:text-[#FF014F]" />
                )}
              </a>
              <a
                href="#testimonies"
                className="w-full my-4"
                onMouseEnter={() => updateStateForKey("key5", true)}
                onMouseLeave={() => updateStateForKey("key5", false)}
              >
                {hover.key5 ? (
                  <motion.p
                    className="text-[14px] font-bold text-[#202942] leading-[32px] font-Manrop py-4 w-full border-b-[2px] text-center uppercase border-[#E6F8F8] hover:text-[#FF014F]"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                  >
                    Comments
                  </motion.p>
                ) : (
                  <AiOutlineComment className="text-[4rem] text-[#202942] font-normal w-full border-b-[2px] py-4 border-[#E6F8F8] hover:text-[#FF014F]" />
                )}
              </a>
              <a
                href="#contact"
                className="w-full my-4"
                onMouseEnter={() => updateStateForKey("key6", true)}
                onMouseLeave={() => updateStateForKey("key6", false)}
              >
                {hover.key6 ? (
                  <motion.p
                    className="text-[14px] font-bold text-[#202942] leading-[32px] font-Manrop py-4 w-full border-b-[2px] text-center uppercase border-[#E6F8F8] hover:text-[#FF014F]"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                  >
                    Contact
                  </motion.p>
                ) : (
                  <IoChatbubblesOutline className="text-[4rem] text-[#202942] font-normal w-full border-b-[2px] py-4 border-[#E6F8F8] hover:text-[#FF014F]" />
                )}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
