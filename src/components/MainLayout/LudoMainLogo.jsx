import React from "react";
import { useNavigate } from "react-router-dom";

const LudoMainLogo = ({light}) => {
    const navigate= useNavigate();
  return (
    <div onClick={()=>navigate("/")} className={`cursor-pointer flex flex-col ${light ? "text-white" : "text-[#0f002b]"}  `}>
      <div className="  text-base font-['Nunito_Sans'] font-extrabold ">
        Ludo Maharaj
      </div>
      <div className="text-center text-base font-['Oooh_Baby'] font-normal  -mt-2">
        Play and Earn
      </div>
    </div>
  );
};

export default LudoMainLogo;
