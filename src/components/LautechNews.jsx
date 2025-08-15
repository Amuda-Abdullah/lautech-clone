import React from 'react';
import styles from '../style';
import { lautechNews } from '../constants';

const LautechNews = () => {
  return (
    <section className={`flex items-center relative`}>
      <div className='flex flex-col'>
        {/* Header Section */}
        <div className={`${styles.marginY} flex flex-row justify-around`}>
          <div className='flex flex-col gap-2'>
            <h1 className={`${styles.heading2}`}>LAUTECH NEWS</h1>
            <div className='flex flex-row items-center justify-center gap-[10px]'>
              <div className='bg-blue-400 rounded-full p-[3px]'></div>
              <div className='bg-yellow-400 rounded-full p-[3px]'></div>
              <div className='bg-red-400 rounded-full p-[3px]'></div>
            </div>
          </div>
          
          <div className='lg:flex items-center flex-col lg:block hidden gap-2'>
            <h1 className={`${styles.heading2}`}>LAUTECH Events</h1>
            <div className='flex flex-row items-center justify-center gap-[10px]'>
              <div className='bg-blue-400 rounded-full p-[3px]'></div>
              <div className='bg-yellow-400 rounded-full p-[3px]'></div>
              <div className='bg-red-400 rounded-full p-[3px]'></div>
            </div>
            <button className={`${styles.marginY} rounded-full text-xs font-medium hover:bg-red-600 hover:scale-100 hover:transition-all hover:text-white border-[2px] p-[5px] px-4 lg:block sm:hidden border-red-600 top-36 absolute`}>
              MORE EVENTS
            </button>
          </div>
        </div>
        
        {/* News Items Section */}
        <div className={`flex flex-col gap-5`}>
          {lautechNews.map((news) => (
            <div key={news.id} className={`flex gap-4 flex-row lg:w-[55%] w-full ${styles.marginX}`}>
              <img src={news.img} alt={news.title} className='w-[15%] h-[15%] shadow' />
              <div className='flex flex-col gap-1'>
                <h1 className={`${styles.paragraph}`}>{news.title}</h1>
                <p className={`${styles.textSize}`}>{news.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* More News Button */}
        <div className={`ml-80 w-[50%] hidden lg:block my-4`}>
          <button className={`${styles.marginY} rounded-full text-xs font-medium hover:bg-red-600 hover:scale-100 hover:transition-all hover:text-white border-[2px] p-[5px] px-4 border-red-600 top-36 flex`}>
            MORE NEWS
          </button>
        </div>
        
        {/* Events Section for Mobile */}
        <div className='flex mt-4 items-center flex-col lg:hidden block gap-2'>
          <button className={`rounded-full mt-6 text-xs font-medium hover:bg-red-600 hover:scale-100 hover:transition-all hover:text-white border-[2px] p-[5px] px-4 border-red-600 top-36 flex`}>
            MORE NEWS
          </button>
          <h1 className={`${styles.heading2}`}>LAUTECH Events</h1>
          <div className='flex flex-row items-center justify-center gap-[10px]'>
            <div className='bg-blue-400 rounded-full p-[3px]'></div>
            <div className='bg-yellow-400 rounded-full p-[3px]'></div>
            <div className='bg-red-400 rounded-full p-[3px]'></div>
          </div>
          <button className={`${styles.marginY} rounded-full text-xs font-medium hover:bg-red-600 hover:scale-100 hover:transition-all hover:text-white border-[2px] p-[5px] px-4 border-red-600 top-36 flex`}>
            MORE EVENTS
          </button>
        </div>
      </div>
    </section>
  );
}

export default LautechNews;
