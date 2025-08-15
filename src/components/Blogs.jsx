import React from 'react'
import { lautechBlogs } from '../constants'
import {GoArrowRight} from "react-icons/go"
import styles from '../style'

const Blogs = () => {
  return (
    <section className={`${styles.flexCenter} justify-center flex-col flex items-center relative`}>
        <div className='flex gap-4 items-center justify-center flex-col'>
            <div className='flex lg:w-[68%] w-[90%] gap-3 items-center flex-col justify-center'>
                <h1 className={`${styles.heading2}`}>STUDYING AT LAUTECH</h1>
                <div className='flex flex-row items-center justify-center gap-[10px]'>
                    <div className='bg-blue-400 rounded-full p-[3px]'></div>
                    <div className='bg-yellow-400 rounded-full p-[3px]'></div>
                    <div className='bg-red-400 rounded-full p-[3px]'></div>
                </div>
                <p className={`${styles.paragraph2}`}>Ladoke Akintola University of Technology (LAUTECH) offers academic opportunities in technological oriented fields. Academic programmes offered by the university span different fields of specialization including Engineering, Pure and Applied Sciences, Health Sciences, Management and Environmental Sciences. The university also has a modern library that is fully computerized. With these facilities LAUTECH is about the best choice for research-oriented individuals and even the industry-focused ones.</p>
                <button className='bg-red-600 mt-6 p-[12px] text-white text-sm font-medium'>ACADEMIC SCHOOLS</button>
            </div>
        </div>
        <div className={`${styles.marginY} ${styles.marginX2} grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8`}>
            {lautechBlogs.map((index) => (
                <div key={index.id} className='bg-white shadow-sm hover:shadow-xl border hover:shadow-slate-200 hover:scale-100 md:h-[500px] h-[480px] lg:h-[450px] sm:h-[450px] transition-shadow'>
                    <img src={index.img} alt="/" className='cursor-pointer'/>
                    <div className={`mx-5 flex flex-col mt-4`}>
                        <h1 className='mt-2 font-semibold cursor-pointer hover:text-red-500'>{index.title}</h1>
                        <p className='font-normal text-xs my-4 text-left roboto-medium leading-[28px] text-slate-500'>{index.subTitle}</p>
                    </div>
                        <span className='text-xs hover:text-red-600 cursor-pointer flex mx-6 flex-row gap-2 items-center'>{index.more} <GoArrowRight size={20}/></span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Blogs
