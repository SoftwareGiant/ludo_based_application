import React, { useState } from "react";
import ButtonLoader from "./ButtonLoader";
const MyButton = ({ text, isLoading, handleCLick, theme }) => {
    return (
      <button
        onClick={handleCLick}
        className={`text-center items-center text-xl mx-auto font-['Inter'] h-[56px] w-full px-[16px] text-[20px] font-bold  gap-[10px]   shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row justify-center pt-4 rounded-lg  ${theme==="black"? "bg-[#0f002b] text-white md:text-[#0f002b]":"bg-white text-[#0f002b]"}  p-4`}
      >
       
        {isLoading ? <ButtonLoader isLight={true}/> : text}
      </button>
    );
  };

  export default MyButton;
