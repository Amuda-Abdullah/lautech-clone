/* eslint-disable */

import { motion } from "framer-motion";
import React from "react";

const Button = (props) => {
  const {
    styles,
    text,
    type = "button",
    disabled,
    onclick,
    isLink,
    location,
  } = props;
  
  return (
    <motion.button
      onClick={() => {
        if (onclick) onclick();
      }}
      disabled={disabled}
      type={type}
      className={`${styles} bg-[#BF9F61] text-white py-3 px-3 md:py-4 md:px-6 font-poppins font-medium text-[14px] 
    rounded-[10px] outline-none `}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(255,255,255)",
      }}
    >
      {isLink ? <a href={`#${location}`}>{text}</a> : text}
    </motion.button>
  );
};

export default Button;
