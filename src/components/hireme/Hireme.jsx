import { motion } from "framer-motion";
import { lineHire, iconHire } from "../../assets";

const Hireme = () => {
  const boxVariants = {
    initial: { backgroundColor: "#FF014F" },
    hover: { backgroundColor: "#202942" },
  };
  return (
    <motion.section
      className="py-[6rem] relative mt-[5rem] lg:max-w-6xl mx-auto px-8 flex flex-col justify-between items-center z-0"
      style={{
        width: "100%",
        background: "linear-gradient(to right, #FFF, #E2F3EA)",
      }}
      animate={{ background: "linear-gradient(to right, #FFF, #E2F3EA)" }}
    >
      <img
        src={lineHire}
        alt=""
        className="absolute w-[100px] lg:w-[150px] top-0 right-0 lg:top-[-40px] lg:right-[-40px]"
      />
      <img
        src={iconHire}
        alt=""
        className="absolute w-[200px] lg:w-[450px] bottom-[-7rem] left-[-40px]"
      />
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-[30px] lg:text-[60px] font-bold text-center font-Manrop w-full lg:w-[500px] lg:leading-[66px] text-[#202942] ">
          I'm Available For Freelance Work
        </h2>
        <motion.a
          href="#contact"
          className="w-[200px] text-[17px] font-semibold text-center font-Manrop leading-[25.5px] text-white rounded-full px-4 py-4 mt-4 lg:mt-[4rem]"
          initial="initial"
          whileHover="hover"
          variants={boxVariants}
          transition={{ duration: 0.5 }}
        >
          Hire Me Now
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hireme;
