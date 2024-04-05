import React from "react";
import loader1 from "../../assets/profile/loader1.svg";
import loader2 from "../../assets/new_game/loadlight.svg";
const ButtonLoader = ({isLight}) => {
  return (
    <div className="flex justify-center items-center">

      <img src={isLight?  loader2 :loader1} className="animate-spin"  />
    </div>
  );
};

export default ButtonLoader;
