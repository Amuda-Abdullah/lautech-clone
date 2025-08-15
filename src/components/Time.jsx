
import {WiTime8} from "react-icons/wi"
import {HiMail} from "react-icons/hi"
import {TfiYoutube} from "react-icons/tfi"
import {RiGoogleFill} from "react-icons/ri"
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa"
import styles from "../style";
import React from "react"

const Time = () => {


  return (
    <nav className={`${styles.paddingX} w-full flex hidden lg:flex lg:block py-4 justify-between items-center border-b border-gray-300`}>
      <div className="flex flex-row items-center space-x-1">
        <WiTime8 />
        <p className="text-[12px] text-gray-500">Mon - Fri : 08:00 - 16:00</p>
        <p><HiMail /></p>
        <p className="text-[12px] text-gray-500">support@lautech.edu.ng</p>
      </div>
      <div className="flex flex-row items-center">
        <ul className="flex flex-row justify-between items-center space-x-3">
          <li className="cursor-pointer"><a href="https://web.facebook.com/lautechofficial/?_rdc=1&_rdr"><FaFacebookF size={12}/></a></li>
          <li><a href="https://x.com/lautechofficial"><FaTwitter  size={12}/></a></li>
          <li className="cursor-pointer"><a href="https://www.youtube.com/c/LadokeAkintolalautech"><TfiYoutube  size={12}/></a></li>
          <li><a href="https://www.linkedin.com/company/lautechofficial"><FaLinkedinIn  size={12}/></a></li>
          <li><a href="https://www.google.com/search?q=lautech+google&sca_esv=14a4d01d4cad0855&rlz=1C1CHBD_enNG851NG851&sxsrf=ADLYWIIMd3zz8TDSXCYUt22Kk4TdGxgZqQ%3A1723790652604&ei=PPW-Zp3IJNWmhbIP7syS6QE&oq=lautech+goog&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGxhdXRlY2ggZ29vZyoCCAAyBBAhGAoyBRAhGJ8FMgUQIRifBTIFECEYnwVIxzJQ2QJYuiBwAXgBkAEAmAGGGaABjyaqAQkzLTEuMy45LTG4AQHIAQD4AQGYAgagAuQmwgIHECMYsAMYJ8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AECwgIKECMYgAQYJxiKBcICDRAAGIAEGLEDGBQYhwLCAhAQABiABBixAxiDARgUGIcCwgIFEAAYgATCAgoQABiABBgUGIcCwgILEC4YgAQYxwEYrwHCAgYQABgWGB7CAgsQABiABBiGAxiKBcICCBAAGIAEGKIEmAMAiAYBkAYSugYGCAEQARgJugYGCAIQARgIkgcLMS4zLTEuMy45LTGgB8cm&sclient=gws-wiz-serp"><RiGoogleFill  size={12}/></a></li>
          <li><a href="https://www.instagram.com/lautechofficial/"><FaInstagram  size={12}/></a></li>
        </ul>
      </div> 
    </nav>
  );
};

export default Time;
