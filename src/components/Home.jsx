import styles from "../style";
import {
  Blogs,
  Carousal,
  Research,
  LautechNews,
} from "../components";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-primary w-full overflow-hidden"
    >
  
      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Carousal />
          <div className={`py-6 mission-bg`}>
            <div className="flex flex-col w-[90%] gap-3 justify-center items-center">
            <h1 className={`${styles.heading2}`}>Mission</h1>
            <div className="flex flex-row gap-2">
              <div className="bg-blue-400 rounded-full p-[3px] flex"></div>
              <div className="bg-yellow-400 rounded-full p-[3px] flex"></div>
              <div className="bg-red-400 rounded-full p-[3px] flex"></div>
            </div>
            <p className={`${styles.heading3}`}>To provide suitable condition for the advancement of knowledge through research and learning; produce self-reliant graduates, apply technology-driven knowledge to creativity and positively impact on the global environment and be epitome of integrity and service.</p>
            </div>
          </div>
        </div>
      </div>

      {/* LautechNews */}
      <div className={`  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <LautechNews />
        </div>
      </div>

      {/* research firm data */}
      <div className={`  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Research />
        </div>
      </div>

      {/* blog updates */}
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Blogs />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
