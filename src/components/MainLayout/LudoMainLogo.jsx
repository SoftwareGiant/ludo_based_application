import React from "react";
import { useNavigate } from "react-router-dom";

const LudoMainLogo = () => {
    const navigate= useNavigate();
  return (
    <div onClick={()=>navigate("/")} className="cursor-pointer flex flex-col text-[#0f002b] ">
      <div className="  text-base font-['Nunito_Sans'] font-extrabold ">
        LUDO KING
      </div>
      <div className="text-center text-base font-['Oooh_Baby'] font-normal  -mt-2">
        punch line
      </div>
    </div>
  );
};

export default LudoMainLogo;
