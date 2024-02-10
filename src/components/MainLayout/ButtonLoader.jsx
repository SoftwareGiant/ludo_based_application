import React from "react";
import loader1 from "../../assets/profile/loader1.svg";


const ButtonLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={loader1} className="animate-spin"  />
    </div>
  );
};

export default ButtonLoader;
