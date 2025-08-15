const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold md:text-[28px] text-[25px] text-center md:leading-[38.5px] leading-[30px]   w-full",

  heading3:
    "font-semibold text-center md:text-[20px] text-[20px] leading-[25px] justify-center flex items-center",

  paragraph:
    "font-poppins text-[8px] sm:text-[10px] md:text-[14px] font-semibold hover:text-red-500 cursor-pointer",

  paragraph2:
    "font-poppins text-[15px] text-center roboto-medium leading-[30px] md:text-[13px] font-semibold text-slate-500",

  flexCenter: "flex lg:justify-center lg:items-center",
  flexStart: "flex justify-center items-start",

  line: "flex border-b border-black",
  paddingX: "sm:px-8 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-8 py-4 mt-8",

  marginX: "sm:mx-16 mx-6",
  marginX2: "sm:mx-8 mx-6",
  marginY: "sm:my-16 my-6",
  textSize: "text-[12px] font-poppins text-red-500",
};

export const layout = {
  section: `flex sm:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} sm:mr-10  ml-0 md:mt-0 mt-10 sm:mt-0 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
