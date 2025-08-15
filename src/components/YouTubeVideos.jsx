import React from 'react';
import styles from '../style';

const YouTubeVideos = () => {
  const videos = [
    { id: 'ujlccH-4pZk', title: 'Alumni Day 2024 - Wednesday April 17, 2023.'},
    { id: 'QNphBiXkotw', title: '16th Convocation Ceremonies - Monday April 22, 2024', subTitle:"Admission to First Degree/Award of Prizes"},
    { id: '_vxrl39rPtw', title: '16th Convocation Ceremonies - Tuesday April 23, 2024', subTitle: "Award of Higher Degrees and Honorary Degrees"},
  ];

  return (
    <div className={`container flex ${styles.marginY}`}>
      <div className={`${styles.marginX2} grid md:grid-cols-2 lg:grid-cols-3`}>
        {videos.map((video) => (
          <div key={video.id} className="">
            <div className="bg-gray-100 border items-center justify-center p-2">
              <iframe
                className="lg:w-[55vh] w-[75vh] h-[50vh]"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
            <div className='flex flex-col p-5'>
              <h2 className="text-[13px] leading-[25px] text-slate-500 font-[700]">{video.title}</h2>
              <p className='text-[13px] leading-[25px] text-slate-500 font-[700]'>{video.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
