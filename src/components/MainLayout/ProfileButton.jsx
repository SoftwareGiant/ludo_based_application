import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginBtn = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/login")}
      className="bg-black cursor-pointer hover:shadow-md flex items-center gap-2 rounded-2xl px-4 py-1 text-white"
    >
      Login
    </div>
  );
};

export const ProfileButton = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/profile")}
      className={
        "w-[32px] h-[32px] cursor-pointer border-[2px] border-white relative rounded-full overflow-hidden"
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

const TotoalBal = ({ users }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/mywallet")}
      className="bg-[#0f002b] border-[1px] border-gray-400 cursor-pointer hover:shadow-md flex items-center gap-1 rounded-2xl px-[10px] py-[5px] text-white"
    >
      <Icon icon="ph:wallet-light" width={16} />
      <p className="text-xs">₹ {users?.walletDetails?.totalAmount}</p>{" "}
    </div>
  );
};
export default TotoalBal;
