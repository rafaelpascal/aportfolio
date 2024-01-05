import { motion } from "framer-motion";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";

const Contact = () => {
  const boxVariants = {
    initial: { backgroundColor: "#FF014F" },
    hover: { backgroundColor: "#202942" },
  };
  return (
    <section
      id="contact"
      className="py-10 lg:max-w-6xl mx-auto mt-[4rem] flex flex-col gap-20 sm:flex-row"
    >
      <div
        className="w-full lg:w-[30%] p-11"
        style={{
          width: "100%",
          background: "linear-gradient(to right, #FDF8E3, #F1F9F4)",
        }}
        animate={{ background: "linear-gradient(to right, #FDF8E3, #F1F9F4)" }}
      >
        <h2 className="text-[36px] text-[#202942] mb-4 font-bold font-Manrop leading-[43px]">
          Lets Talk?
        </h2>
        <p className="text-[15px] text-[#666666] font-Manrop leading-[25.5px] font-normal mb-4">
          It's all about the humans behind a brand and those experiencing it, br
          we're right there. In the middle performance quick.
        </p>
        <motion.input
          initial={{ border: "none" }}
          whileFocus={{ border: "2px solid #00C0FF", borderRadius: "10px" }}
          transition={{ duration: 0.2 }}
          style={{
            padding: "12px",
            outline: "none", // Remove the default focus outline
          }}
          className="w-full p-4 my-4"
          type="text"
          placeholder="Name"
        />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <motion.input
            initial={{ border: "none" }}
            whileFocus={{ border: "2px solid #00C0FF", borderRadius: "10px" }}
            transition={{ duration: 0.2 }}
            style={{
              padding: "12px",
              outline: "none", // Remove the default focus outline
            }}
            className="w-full p-4 my-4"
            type="email"
            placeholder="Email"
          />
          <motion.input
            initial={{ border: "none" }}
            whileFocus={{ border: "2px solid #00C0FF", borderRadius: "10px" }}
            transition={{ duration: 0.2 }}
            style={{
              padding: "12px",
              outline: "none", // Remove the default focus outline
            }}
            className="w-full p-4 my-4"
            type="text"
            placeholder="Phone"
          />
        </div>
        <motion.textarea
          initial={{ border: "none" }}
          whileFocus={{ border: "2px solid #00C0FF", borderRadius: "10px" }}
          transition={{ duration: 0.2 }}
          style={{
            padding: "12px",
            outline: "none",
            width: "100%",
          }}
          placeholder="Tell Us about the Project..."
          name=""
          id=""
          cols="30"
          rows="6"
        ></motion.textarea>
        <motion.button
          className="w-[200px] text-[17px] font-semibold font-Manrop leading-[25.5px] text-white rounded-full px-4 py-4 mt-4 lg:mt-[2rem]"
          initial="initial"
          whileHover="hover"
          variants={boxVariants}
          transition={{ duration: 0.5 }}
        >
          Send Message
        </motion.button>
      </div>
      <div className="w-full lg:w-[70%] gap-16 flex justify-center flex-col items-center">
        <div className="flex justify-center w-full items-center gap-4">
          <div className="bg-[#00C0FF] p-4 rounded-lg">
            <HiOutlineMailOpen className="text-[50px] text-white" />
          </div>
          <div>
            <h2 className="text-[15px] mb-2 font-semibold font-Manrop leading-[25px]">
              Our Email
            </h2>
            <div className="flex flex-col justify-center items-center">
              <a
                className="font-Manrop text-[14px] font-semibold"
                href="mailto:rafaelpascal234@gmail.com"
              >
                rafaelpascal234@gmail.com
              </a>
              <a
                className="font-Manrop text-[14px] font-semibold"
                href="mailto:msdream234@hotmail.com"
              >
                msdream234@hotmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full items-center gap-4">
          <div className="bg-[#FF014F] p-4 rounded-lg">
            <IoLocationOutline className="text-[50px] text-white" />
          </div>
          <div>
            <h2 className="text-[15px] mb-2 font-semibold font-Manrop leading-[25px]">
              ADDRESS
            </h2>
            <div className="flex flex-col justify-center items-center">
              <p className="font-Manrop w-[190px] text-[13px] font-semibold">
                22 Baker Street, London, United <br />
                Kingdom, W1U 3BW
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full items-center gap-4">
          <div className="bg-[#FEC447] p-4 rounded-lg">
            <CiHeadphones className="text-[50px] text-white" />
          </div>
          <div>
            <h2 className="text-[15px] mb-2 font-semibold font-Manrop leading-[25px]">
              Our Email
            </h2>
            <div className="flex flex-col justify-center items-center">
              <a
                className="font-Manrop text-[14px] font-semibold"
                href="mailto:rafaelpascal234@gmail.com"
              >
                rafaelpascal234@gmail.com
              </a>
              <a
                className="font-Manrop text-[14px] font-semibold"
                href="mailto:msdream234@hotmail.com"
              >
                msdream234@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
