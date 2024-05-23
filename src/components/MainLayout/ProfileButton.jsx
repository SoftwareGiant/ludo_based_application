import React from "react";
import { useNavigate } from "react-router-dom";

export const ProfileButton = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/profile")}
      className={
        "w-[32px] h-[32px] cursor-pointer border-[2px] border-white relative mt-1 rounded-full overflow-hidden"
      }
    >
      <img
        className="absolute h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Cover"
      />
    </div>
  );
};
