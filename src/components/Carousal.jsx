import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ict, inaugural } from '../assets';
import { motion, AnimatePresence } from 'framer-motion';

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [ict, inaugural]; // Add your images here

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 50 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 50 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  return (
    <section className={`flex justify-center w-full items-center relative`}>
      <motion.div
        initial={{ y: '100vw' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 35 }}
        className={`bg-cover h-[80vh] my-6 object-center w-full flex items-center justify-center overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence custom={currentIndex}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className="w-full h-full object-center absolute"
            custom={currentIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>
        {isHovered && (
          <>
            <motion.button
              onClick={handlePrev}
              className="absolute left-4 bg-white text-black p-2"
              whileHover={{ scale: 1.2 }}
            >
              <FaChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="absolute right-4 bg-white text-black p-2"
              whileHover={{ scale: 1.2 }}
            >
              <FaChevronRight size={20} />
            </motion.button>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Carousal;
