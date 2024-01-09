import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ra5zusb",
        "template_xr5ed2s",
        form.current,
        "MAi8-OGYl-d9npcEd"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          toast.success("Message Successfully Sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Message Not Sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };
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
        <form ref={form} onSubmit={sendEmail}>
          <motion.input
            initial={{ border: "none" }}
            whileFocus={{ border: "2px solid #00C0FF", borderRadius: "10px" }}
            transition={{ duration: 0.2 }}
            style={{
              padding: "12px",
              outline: "none",
            }}
            className="w-full p-4 my-4"
            type="text"
            name="user_name"
            placeholder="Name"
          />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <motion.input
              initial={{ border: "none" }}
              whileFocus={{ border: "2px solid #00C0FF", borderRadius: "10px" }}
              transition={{ duration: 0.2 }}
              style={{
                padding: "12px",
                outline: "none",
              }}
              className="w-full p-4 my-4"
              type="email"
              name="user_email"
              placeholder="Email"
            />
            <motion.input
              initial={{ border: "none" }}
              whileFocus={{ border: "2px solid #00C0FF", borderRadius: "10px" }}
              transition={{ duration: 0.2 }}
              style={{
                padding: "12px",
                outline: "none",
              }}
              className="w-full p-4 my-4"
              type="text"
              name="user_phone"
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
            name="message"
            cols="30"
            rows="6"
          ></motion.textarea>
          <motion.button
            className="w-[200px] text-[17px] font-semibold font-Manrop leading-[25.5px] text-white rounded-full px-4 py-4 mt-4 lg:mt-[2rem]"
            initial="initial"
            whileHover="hover"
            variants={boxVariants}
            transition={{ duration: 0.5 }}
            value="Send"
            type="submit"
          >
            Send Message
          </motion.button>
        </form>
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
      <ToastContainer />
    </section>
  );
};

export default Contact;
