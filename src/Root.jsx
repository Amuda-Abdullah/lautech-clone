import styles from "./style";
import { Footer, Navbar, Time } from "./components";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import React from "react";


const Root = () => {
  return (
    <motion.div
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-primary w-full overflow-hidden"
    >
      {/* general navbar  */}
          <Time />
          <Navbar />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div>

      {/* container for other app content */}
      <div>
        <Outlet />
      </div>

      <div
        className={`bg-[#252429] ${styles.paddingX} ${styles.flexCenter} mt-10`}
      >
        {/* general footer */}
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default Root;
