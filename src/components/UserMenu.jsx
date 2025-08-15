import React, { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../style";


const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, {});
  return (
    <div className="relative">
      <div
        onClick={toggleOpen}
        className="rounded-full flex flex-row scale-100 transition cursor-pointer"
      >
        <FaSearch />
      </div>
      {isOpen && (
        <div className="absolute z-20 shadow-xl lg:hidden block w-[60vw] bg-white overflow-hidden justify-center flex right-[30px] top-2 text-md items-center">
          <div className={`${styles.paddingY} flex flex-col gap-4 cursor-pointer items-start justify-start`}>
            <h1 className={`${styles.heading3}`}>Search Form</h1>
            <div className="w-[250px] h-[30px] border flex flex-row justify-end items-center border-gray-300">
              <button className="bg-red-600 h-[30px] w-[100px] text-white text-[14px] font-semibold">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
