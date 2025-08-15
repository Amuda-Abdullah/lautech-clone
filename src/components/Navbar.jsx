import { useState } from "react";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import styles from "../style";
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleDown, FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { SearchMenu, UserMenu } from ".";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const activeLink = 'font-poppins cursor-pointer text-gray-600 flex  mr-5 hover:text-[#b30710] text-[#b30710]';
  const normalLink = 'font-poppins cursor-pointer text-gray-600 flex  mr-5 hover:text-[#b30710]';
  const normalLinkMobile = 'font-poppins font-semibold cursor-pointer text-gray-600 flex text-[16px] mr-5 hover:text-[#b30710]';

  const handleDropdownToggle = (navTitle) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [navTitle]: !prev[navTitle],
    }));
  }
  return (
    <nav className={`${styles.paddingX} w-full flex py-4 justify-between`}>
      <div className="flex flex-row items-center">
        <NavLink to={`/`} className={`flex flex-row items-center`}>
          <img src={logo} alt="menu" className="w-[60px] h-[80px] object-center " />
          <h1 className="flex leading-5 mt-4 flex-col roboto-bold text-[23px]">
            LADOKE AKINTOLA{" "}
            <span className="text-[14px] font-medium">
              UNIVERSITY OF TECHNOLOGY
            </span>
          </h1>
        </NavLink>
      </div>
      <ul className="list-none lg:flex font-semibold text-xs lg:justify-items-end hidden gap-2 mt-4">
        {navLinks.map((nav, index) => (
          <li
            key={index.toString()}
            onMouseEnter={() => setHoveredNav(nav.title)}
            onMouseLeave={() => setHoveredNav(null)}
            className="relative"
          >
            <NavLink
              to={`/${nav.id}`}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className="capitalize  text-xs flex flex-row items-center">
                {nav.title} {nav.subNav && <FaAngleDown className="ml-2" />}
              </span>
            </NavLink>
            {hoveredNav === nav.title && nav.subNav && (
              <div className="bg-white absolute shadow-lg p-2 w-48 z-50">
                {nav.subNav.map((subNav, index) => (
                  <li key={index.toString()} className="mt-2">
                    <NavLink
                      to={`/${subNav.id}`}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      <span className="capitalize text-xs">{subNav.title}</span>
                    </NavLink>
                  </li>
                ))}
              </div>
            )}
          </li>
        ))}
        <SearchMenu />
      </ul>
      <div className="lg:hidden flex justify-end items-center">
        <UserMenu />
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="ml-4 cursor-pointer">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
          <div
            className={
              nav
                ? 'fixed top-0 left-0 lg:w-[300px] shadow-lg overflow-y-scroll w-[80%] h-screen bg-white z-30 duration-300'
                : 'fixed top-0 left-[-100%] lg:w-[300px] shadow-lg overflow-y-scroll w-[80%] h-screen bg-white z-30 duration-300'
            }
          >
            <ul className="list-none flex flex-1 flex-col gap-6">
              <div className="flex items-center justify-center">
                <IoIosClose
                  size={50}
                  onClick={() => setNav(!nav)}
                  className="my-3 hover:text-red-600 cursor-pointer"
                />
              </div>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className="relative">
                  <div className="flex justify-between items-center" onClick={() => handleDropdownToggle(nav.title)}>
                    <NavLink
                      to={`/${nav.id}`}
                      className={({ isActive }) => (isActive ? activeLink : normalLinkMobile)}
                    >
                      <span className="relative bg-white px-4">{nav.title}</span>
                    </NavLink>
                    {nav.subNav && (
                      <div className="mr-2 cursor-pointer">
                        {dropdownOpen[nav.title] ? <FaMinus /> : <FaPlus />}
                      </div>
                    )}
                  </div>
                  <AnimatePresence>
                    {dropdownOpen[nav.title] && nav.subNav && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="list-none mt-2 pl-4 overflow-hidden"
                      >
                        {nav.subNav.map((subNav, subIndex) => (
                          <li key={subIndex.toString()} className="mt-2">
                            <NavLink
                              to={`/${subNav.id}`}
                              className={({ isActive }) => (isActive ? activeLink : normalLinkMobile)}
                            >
                              <span className="capitalize text-base">{subNav.title}</span>
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
