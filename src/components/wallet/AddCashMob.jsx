import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarMob } from "../MainLayout/SidebarMob";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import scanner from "../../assets/new_game/scanner.svg";
import { useState } from "react";
import ButtonLoader from "../MainLayout/ButtonLoader.jsx"
import "../../app.css";

const AddCashMob = () => {
  const [isScanner,setIsScanner] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const[isbtnLoad,setIsButtonLoad] = useState(false);

    const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
   
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsButtonLoad(false);
      console.log('Uploaded file:', file);
      alert("balance will update soon")
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };                 

  const handleClick = () => {
    setIsScanner(true);
    setIsButtonLoad(true)
    // Replace this with your desired action on button click
    if(inputValue===""){
        alert("please select amount")
    return;
    }
    if(inputValue<10 || inputValue>2000){
        alert("please select amount between 10 and 2000")
        return;
    }
    console.log('Button clicked!', inputValue);
  
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
        <div className="flex flex-row gap-3 w-2/5 items-start">
          <SidebarMob />
          <div className="relative flex flex-row justify-center w-24 items-start">
            <div className="text-center text-base font-['Nunito_Sans'] font-bold text-[#0f002b] absolute top-0 left-0 h-5 w-24">
              LUDO KING
            </div>
            <div className="text-center text-base font-['Oooh_Baby'] text-[#0f002b] relative mt-4">
              punch line
            </div>
          </div>
        </div>
        <img
         onClick={() => navigate("/")}
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
            Deposit Cash
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
            <span>Available Balance</span>
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
            <div className="bg-[0F002B] opacity-[30%] font-[Nunito-Sans]" onClick={handleClick}>{isbtnLoad ? <ButtonLoader/> : "Add"}</div>
          </div>
          <div className="text-white text-right">Min. ₹ 10  Max. ₹ 10,000</div>
        
        {isScanner ? 
        <div className="flex justify-center flex-col items-center">
         <img src={scanner}/>

         <div className="container mx-auto mt-10 flex items-center justify-center">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        className="bg-[#0F002B]  text-white font-bold py-2 px-10 rounded-lg"
        onClick={handleFileUpload}
      >
        Upload Image
      </button>
    </div>
        </div>
        : 
        <div className="text-white flex font-[Inter] gap-4 flex-wrap ">
        <div onClick={()=>setInputValue(100)} className="p-4 rounded-lg bg-[#FFFFFF] bg-opacity-20 shadow-md">₹ 100</div>
        <div onClick={()=>setInputValue(200)} className="p-4 rounded-lg bg-[#FFFFFF] bg-opacity-20 shadow-md">₹ 250</div>
        <div onClick={()=>setInputValue(500)} className="p-4 rounded-lg bg-[#FFFFFF] bg-opacity-20 shadow-md">₹ 500</div>
        <div onClick={()=>setInputValue(1000)} className="p-4 rounded-lg bg-[#FFFFFF] bg-opacity-20 shadow-md">₹ 1000</div>
        <div onClick={()=>setInputValue(2000)} className="p-4 rounded-lg bg-[#FFFFFF] bg-opacity-20 shadow-md">₹ 2000</div>
      </div>
        }
          

          
        </div>
        <div className="font-[Nunito-Sans] text-white relative text-center pb-32">*Minimum Deposit Amount ₹ 10</div>
      </div>
    </div>
  );
};

export default AddCashMob;
