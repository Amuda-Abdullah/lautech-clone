import React, { useState } from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import styles from "../style";
import { info, staff, studentPortal, unit } from '../constants';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '') {
      alert('Please enter your email.');
    } else {
      // Handle the form submission
      console.log('Email submitted:', email);
    }
  };

  return (
    <section className={`${styles.flexCenter} flex flex-col gap-6 relative`}>
      <div className='flex flex-col w-full'>
        <form onSubmit={handleSubmit} className={`flex md:flex-row justify-evenly my-6 lg:items-center flex-col gap-6 w-full`}>
          <h1 className="text-gray-300 font-medium text-xs">SUBSCRIBE TO OUR NEWSLETTER</h1>
          <input
            type="email"
            className="border-none outline-none w-[400px] p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-gray-300 text-xs">Stay informed by subscribing to our newsletter.</p>
          <button
            className="rounded-none bg-red-600 items-center text-white p-2 w-[60px] justify-center flex"
            type="submit"
          >
            <FaTelegramPlane size={24}/>
          </button>
        </form>
          <hr className='border-b-[2%] border-[#3c3939] gap-4 w-full'/>
      </div>
      <div className='grid gap-14 w-full md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 mb-6 grid-cols-1'>
          <div className='flex flex-col'>
            <h1 className='text-white font-semibold text-'>UNITS AND SERVICES</h1>
          <hr className='border-b-[2%] my-2 border-red-500'/>
            <ul className='list-none flex flex-col gap-3'>
              {unit.map((nav) => (
                <NavLink to={`/${nav.id}`}>
                    <li className='text-zinc-400 font-normal hover:text-red-600 text-sm'>
                        {nav.title}
                    </li>
                </NavLink>
              ))}
            </ul>
          </div>
          <div className='flex flex-col items-start gap-3 justify-start'>
            <h1 className='text-zinc-400'>INFO</h1>
            <ul className='flex flex-col gap-3 list-disc'>
              {info.map((nav) => (
                <NavLink to={`/${nav.id}`}>
                    <li className='text-zinc-400 font-normal hover:text-red-600 text-sm'>
                        {nav.title}
                    </li>
                </NavLink>
              ))}
            </ul>
          </div>
          <div className='flex flex-col items-start gap-3 justify-start'>
            <h1 className='text-zinc-400'>STUDENT PORTALS</h1>
            <ul className='flex flex-col gap-3 list-disc'>
              {studentPortal.map((nav) => (
                <NavLink to={`/${nav.id}`}>
                    <li className='text-zinc-400 font-normal hover:text-red-600 text-sm'>
                        {nav.title}
                    </li>
                </NavLink>
              ))}
            </ul>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-white font-semibold text-'>STAFF</h1>
              <hr className='border-b-[2%] my-2 border-red-500'/>
            <ul className='flex flex-col gap-3 list-disc'>
              {staff.map((nav) => (
                <NavLink to={`/${nav.id}`}>
                    <li className='text-zinc-400 font-normal hover:text-red-600 text-sm'>
                        {nav.title}
                    </li>
                </NavLink>
              ))}
            </ul>
          </div>
      </div>
    </section>
  );
};

export default Footer;
