import React, { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../style";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div
        onClick={toggleOpen}
        className="rounded-full flex flex-row scale-100 transition cursor-pointer"
      >
        <FaSearch />
      </div>
      {isOpen && (
        <div className="absolute z-30 shadow-xl w-[25vw] p-2 bg-white overflow-hidden justify-center flex right-0 top-12 text-md">
          <div className="flex flex-col cursor-pointer px-6 items-start justify-start">
            <h1 className={`${styles.heading3}`}>Search Form</h1>
            <div className="w-[250px] h-[30px] border flex flex-row justify-between items-center border-gray-300">
              <input
                type="text"
                className="w-full h-full px-2 outline-none"
                placeholder="Type your search..."
              />
              <button className="bg-red-600 h-full px-4 text-white text-[14px] font-semibold">
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
