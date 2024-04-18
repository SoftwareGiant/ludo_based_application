import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";

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
        <Carousel className="rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1642056448416-b7dd0ed968cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default AppTour;
