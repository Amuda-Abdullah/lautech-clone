import React from 'react'
import styles from '../style'
import {TfiYoutube} from "react-icons/tfi"
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa"
import YouTubeVideos from './YouTubeVideos'


const Research = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} justify-center flex items-center relative`}>
      <div className='flex flex-col gap-2'>
        <h1 className={`${styles.heading2}`}>Social Media Links and Trending Videos</h1>
        <div className='flex flex-row items-center justify-center gap-[10px]'>
          <div className='bg-blue-400 rounded-full p-[3px]'></div>
          <div className='bg-yellow-400 rounded-full p-[3px]'></div>
          <div className='bg-red-400 rounded-full p-[3px]'></div>
        </div>
        <div className='flex flex-row mt-6 items-center justify-center gap-[10px]'>
          <div className='bg-[#102c57e5] rounded-full hover:opacity-75 text-white p-3'><FaFacebookF size={14}/></div>
          <div className='bg-[#3572EF] rounded-full hover:opacity-75 text-white p-3'><FaTwitter size={14}/></div>
          <div className='bg-red-700 rounded-full hover:opacity-75 text-white p-3'><TfiYoutube size={14}/></div>
          <div className='bg-[#006989] rounded-full hover:opacity-75 text-white p-3'><FaLinkedinIn size={14}/></div>
          <div className='bg-[#f4f0f0] rounded-full hover:opacity-75 text-white p-3'><FaInstagram size={14}/></div>
        </div>
        <YouTubeVideos />
      </div>
    </section>
  )
}

export default Research
