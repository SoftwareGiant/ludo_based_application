import React from "react";
import { CarouselDefault } from "./Carousel";
import { useNavigate } from "react-router-dom";

const AppTour = () => {
  const navigate = useNavigate();
  return (
    <div
      id="AppStartAppTourRoot"
      className="h-screen max-w-[480px] flex flex-col w-full "
    >
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden "
      />
      <div className="flex justify-between p-4 font-[Inter] ">
        <span className="font-extrabold">App Tour</span>{" "}
        <span
          className="font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Skip
        </span>
      </div>
      <div className=" w-full p-4 bg-white h-full">
        <CarouselDefault />
      </div>
    </div>
  );
};

export default AppTour;
