import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarMob } from "../MainLayout/SidebarMob";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import scanner from "../../assets/new_game/scanner.svg";
import { useState } from "react";
import ButtonLoader from "../MainLayout/ButtonLoader.jsx";
import "../../app.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../live_battle/userSlice.js";
import { Icon } from "@iconify-icon/react";
import axios from "axios";
import LudoMainLogo from "../MainLayout/LudoMainLogo.jsx";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { ProfileButton } from "../MainLayout/ProfileButton.jsx";
import HelpButton from "../MainLayout/HelpButton.jsx";
const AddCashMob = () => {
  const [isScanner, setIsScanner] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isbtnLoad, setIsButtonLoad] = useState(false);
  const users = useSelector((state) => state.user.user);
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  console.log(accessToken, refreshToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);
  console.log(users);
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file && inputValue) {
      try {
        console.log(file, inputValue);
        const formData = {
          amount: inputValue,
          paymentPlatform: "Paytm",
          image: file,
        };
        // console.log(formData);
        const response = await axios.post("api/payment/deposit", formData, {
          headers: {
            Authorization: `bearer ${accessToken}`,
          },
        });
        toast.success(response.data.message);
        if (response.status === 200) {
          setIsButtonLoad(false);
          setIsScanner(false);
          setInputValue("");
          navigate("/transactionhistory");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("failed to upload file");
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value <= 10000) {
      setInputValue(value);
    }
  };

  const handleClick = () => {
    if (inputValue === "") {
      toast.warning("please select amount");
      return;
    }

    // Replace this with your desired action on button click

    if (inputValue < 10 || inputValue > 10000) {
      toast.warning("please select amount between 10 and 10,000");
      return;
    }
    setIsScanner(true);
    setIsButtonLoad(true);
    console.log("Button clicked!", inputValue);
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
          <LudoMainLogo />
        </div>
        <ProfileButton />
      </div>
      <div className="flex justify-between items-center px-4 py-2 w-full">
        <div className="flex gap-5 items-center">
          <Icon
            icon="ep:back"
            width="24"
            onClick={() => navigate("/mywallet")}
          />
          <div
            id="LiveBattle13"
            className="text-center text-xl font-['Inter'] text-[#0f002b]"
          >
            Deposit Cash
          </div>
        </div>

        <HelpButton dark={true} />
      </div>
      <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative flex flex-col justify-between h-full">
        <div className="bg-[#fead3a] h-[86%] w-[200%] rounded-[50%]   -top-20 absolute -left-[50%]" />

        <div className="relative m-8 flex flex-col gap-4">
          <div className="flex justify-between ">
            <span>Available Balance</span>
            <span>₹ {users?.walletDetails?.totalAmount}</span>
          </div>
          <div className="flex justify-between items-center rounded-md bg-white p-3">
            <div className="flex w-full">
              <span>₹</span>
              <input
                value={inputValue}
                onChange={handleChange}
                type="text"
                placeholder="Enter Amount"
                className="outline-none hover:outline-none w-full px-2"
              />
            </div>
            {isbtnLoad ? (
              <div className="bg-[0F002B] text-black opacity-[30%] font-[Nunito-Sans]">
                <ButtonLoader />
              </div>
            ) : (
              <button
                className={`text-xl bg-[0F002B] text-black ${
                  inputValue ? "" : "opacity-[70%]"
                } font-[Nunito-Sans]`}
                onClick={handleClick}
              >
                Add
              </button>
            )}
          </div>
          <div className="text-white text-right">Min. ₹ 10 Max. ₹ 10,000</div>

          {isScanner ? (
            <div className="flex justify-center flex-col items-center">
              <img src={scanner} />

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
          ) : (
            <div className="text-white flex font-[Inter] gap-4 flex-wrap ">
              <div
                onClick={() => setInputValue(100)}
                className="cursor-pointer  p-4 rounded-lg bg-[#FFFFFF] bg-opacity-20 shadow-md"
              >
                ₹ 100
              </div>
              <div
                onClick={() => setInputValue(250)}
                className="cursor-pointer p-4 rounded-lg bg-[#FFFFFF] bg-opacity-20 shadow-md"
              >
                ₹ 250
              </div>
              <div
                onClick={() => setInputValue(500)}
                className="cursor-pointer p-4 rounded-lg bg-[#FFFFFF] bg-opacity-20 shadow-md"
              >
                ₹ 500
              </div>
              <div
                onClick={() => setInputValue(1000)}
                className="cursor-pointer p-4 rounded-lg bg-[#FFFFFF] bg-opacity-20 shadow-md"
              >
                ₹ 1000
              </div>
              <div
                onClick={() => setInputValue(2000)}
                className="cursor-pointer p-4 rounded-lg bg-[#FFFFFF] bg-opacity-20 shadow-md"
              >
                ₹ 2000
              </div>
            </div>
          )}
        </div>
        <div className="font-[Nunito-Sans] text-white relative text-center pb-32">
          *Minimum Deposit Amount ₹ 10
        </div>
        <a
          href="https://wa.me/9315312511"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full relative flex justify-end "
        >
          {" "}
          <Icon
            icon="logos:whatsapp-icon"
            width={36}
            className="fixed right mx-6 cursor-pointer z-50 bottom-6 transition transform hover:scale-110 hover:bg-green-600 bg-green-500 active:scale-95 active:bg-green-600 rounded-full shadow-xl p-2"
          />
        </a>
      </div>
    </div>
  );
};

export default AddCashMob;
