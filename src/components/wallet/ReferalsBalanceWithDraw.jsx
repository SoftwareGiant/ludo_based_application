import React from "react";
import { useNavigate } from "react-router-dom";
import { SidebarMob } from "../MainLayout/SidebarMob";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import { useState } from "react";
import "../../app.css";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import { toast } from "react-toastify";

const ReferalsBalanceWithDraw = () => {
    const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    // Replace this with your desired action on button click
    if(inputValue===""){
        toast.warning("please select amount")
    return;
    }
    if(inputValue<10 || inputValue>2000){
      toast.warning("please select amount between 10 and 2000")
        return;
    }
    console.log('Button clicked!', inputValue);
    toast.success("amount added successfully")
    setInputValue("")
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-[480px] w-full min-h-screen h-full bg-[#fead3a]">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a] flex flex-row justify-between max-w-[480px] w-full h-12 items-start pt-2 px-5 ">
        <div className="flex flex-row gap-3 items-start">
        <SidebarMob users={users} />
          <LudoMainLogo/>
        </div>
        <img
        onClick={()=>navigate("/profile")}
          src={FrameProfile}
          alt="Frame1"
          className="mt-1 w-8 h-8 border rounded-[100px]"
        />
      </div>
      <div className="flex justify-between items-center px-4 py-2 w-full">
        <div className="flex gap-5 items-center">
          <img
            onClick={() => navigate("/mywallet")}
            src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
            alt="HardwareKeyboardBackspace icon"
            id="Epback"
            className="w-6"
          />
          <div
            id="LiveBattle13"
            className="text-center text-xl font-['Inter'] text-[#0f002b]"
          >
           Redeem Your Referral Balance
          </div>
        </div>
        <img
          onClick={() => navigate("/help")}
          src="https://file.rendit.io/n/ib8IMr1PTiCuwTfVAXZs.svg"
          alt="ActionInfoOutline icon"
          id="Icoutlineinfo"
          className="w-6"
        />
      </div>
      <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative flex flex-col justify-between h-full">
        <div className="bg-[#fead3a] h-[86%] w-[200%] rounded-[50%]   -top-20 absolute -left-[50%]" />

        <div className="relative m-8 flex flex-col gap-4">
          <div className="flex justify-between ">
            <span>Referral Balance</span>
            <span>₹ 501</span>
          </div>
          <div className="flex justify-between items-center rounded-md bg-white p-3">
            <div className="flex w-full">
              <span>₹</span>
              <input
              value={inputValue} onChange={handleChange} 
                type="text"
                placeholder="Enter Amount"
                className="outline-none hover:outline-none w-full px-2"
              />
            </div>
            <div onClick={handleClick}>Withdraw</div>
          </div>
          <div className="text-right text-[0F002B] font-[Nunito-Sans] opacity-[20%] font-bold">Withdraw ₹ 501</div>
        </div>
        <div className="font-[Nunito-Sans] text-white relative text-center pb-32">*Minimum Withdraw Amount ₹ 100</div>
      </div>
    </div>
  );
};

export default ReferalsBalanceWithDraw;

