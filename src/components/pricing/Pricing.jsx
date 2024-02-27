import { recent } from "../../assets";
import { motion } from "framer-motion";
import { pricing, javascript } from "../../assets";

const Pricing = () => {
  const boxVariants = {
    initial: { backgroundColor: "#FF014F" },
    hover: { backgroundColor: "#202942" },
  };
  const bounceAnimation = {
    y: [0, -30, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
  return (
    <section className="py-10 lg:max-w-6xl mx-auto px-[2rem] mt-[4rem] relative">
      <img
        src={recent}
        alt=""
        className="absolute lg:left-[-2rem] left-0 w-[50px] top-[1rem]"
      />
      <div className="mb-[5rem]">
        <p className="text-[20px] font-bold leading-[24px] mb-4 font-Manrop bg-clip-text text-transparent bg-gradient-to-r from-[#419BDA] to-[#FB0452]">
          PRICING
        </p>
        <div className="flex flex-col sm:flex-row lg:justify-between lg:items-start justify-center items-start">
          <div className="w-full lg:w-[50%] mt-8 flex flex-col justify-start items-start">
            <h2 className="text-[26px] mb-8 lg:text-[36px] font-extrabold leading-[43.2px] text-[#202942] font-Manrop w-full lg:w-[450px]">
              Pricing plans to get your best
            </h2>
            <motion.img
              src={pricing}
              alt="Web"
              className="w-[400px]"
              animate={bounceAnimation}
            />
          </div>
          <div className="w-full lg:w-[50%] mt-8 gap-8 flex flex-col justify-between items-center">
            <div className="bg-[#F7FDFF] h-full w-full p-8">
              <div className="flex justify-between items-center">
                <h2 className="text-[16px] lg:text-[20px] font-extrabold leading-[43.2px] text-[#202942] font-Manrop">
                  Static frontend Development
                </h2>
                <h1 className="text-[26px] lg:text-[36px] font-extrabold leading-[43.2px] text-[#202942] font-Manrop">
                  <span className="text-xs align-top">NGN</span>
                  300,000.00
                </h1>
              </div>
              <ol>
                <li className="text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-normal mb-2">
                  Figma transformation
                </li>
                <li className="text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-normal mb-2">
                  Design implement
                </li>
                <li className="text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-normal mb-2">
                  Responsive Design
                </li>
              </ol>
              <div className="flex justify-between items-center">
                <motion.button
                  className="w-[150px] text-[15px] font-semibold font-Manrop leading-[25.5px] text-white rounded-full px-4 py-3 mt-4 lg:mt-[1.5rem]"
                  initial="initial"
                  whileHover="hover"
                  variants={boxVariants}
                  transition={{ duration: 0.5 }}
                >
                  Order now
                </motion.button>
                <img src={javascript} alt="" className="w-[80px]" />
              </div>
            </div>
            <div className="bg-[#F7FDFF] h-full w-full p-8">
              <div className="flex justify-between items-center">
                <h2 className="text-[16px] lg:text-[20px] font-extrabold leading-[43.2px] text-[#202942] font-Manrop">
                  Backend Development
                </h2>
                <h1 className="text-[26px] lg:text-[36px] font-extrabold leading-[43.2px] text-[#202942] font-Manrop">
                  <span className="text-xs align-top">$</span>
                  547.95
                </h1>
              </div>
              <ol>
                <li className="text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-normal mb-2">
                  Figma transformation
                </li>
                <li className="text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-normal mb-2">
                  Design implement
                </li>
                <li className="text-[15px] text-[#666666] font-Manrop text-justify leading-[25.5px] font-normal mb-2">
                  Responsive Design
                </li>
              </ol>
              <div className="flex justify-between items-center">
                <motion.button
                  className="w-[150px] text-[15px] font-semibold font-Manrop leading-[25.5px] text-white rounded-full px-4 py-3 mt-4 lg:mt-[1.5rem]"
                  initial="initial"
                  whileHover="hover"
                  variants={boxVariants}
                  transition={{ duration: 0.5 }}
                >
                  Order now
                </motion.button>
                <img src={javascript} alt="" className="w-[80px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
