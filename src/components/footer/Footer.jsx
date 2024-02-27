import React from "react";
import { FaTwitter, FaSlack, FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full py-9 lg:py-[2rem] flex justify-center items-center bg-[#040836] mt-[4rem]">
      <div className="lg:max-w-6xl mx-auto w-[50%] lg:w-[15%]">
        <div className="flex justify-center items-center my-[1rem]">
          <a
            href="#"
            className="text-[2rem] font-Manrop font-semibold mb-[1rem] text-[#fff]"
          >
            Mr.Raph
          </a>
        </div>
        <div className="flex justify-between items-center mb-[2rem]">
          <a
            className="bg-slate-500 p-3 rounded-lg"
            href="https://twitter.com/RaphaelEmehelu"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="text-[18px] text-[#040836]" />
          </a>
          <a
            className="bg-slate-500 p-3 rounded-lg"
            href="https://m.me/100092026721583"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookMessenger className="text-[18px] text-[#040836]" />
          </a>
          <a
            className="bg-slate-500 p-3 rounded-lg"
            href="https://api.whatsapp.com/send?phone=+2348164493471"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="text-[18px] text-[#040836]" />
          </a>
          <a
            className="bg-slate-500 p-3 rounded-lg"
            href="https://www.linkedin.com/in/raphael-emehelu-20724b13a/"
            target="_blank"
          >
            <FaLinkedinIn className="text-[18px] text-[#040836]" />
          </a>
        </div>
        <h2 className="text-[12px] text-white text-center font-normal font-Manrop leading-[25px]">
          © Mr.Raph Website. All rights reserved
        </h2>
      </div>
    </section>
  );
};

export default Footer;
