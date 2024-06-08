import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { useState } from "react";
import "../../App.css";
import { Icon } from "@iconify-icon/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../live_battle/userSlice";
import axios from "axios";
import ButtonLoader from "../MainLayout/ButtonLoader.jsx";
import LudoMainLogo from "../MainLayout/LudoMainLogo.jsx";
import { toast } from "react-toastify";
import { ProfileButton } from "../MainLayout/ProfileButton.jsx";
import HelpButton from "../MainLayout/HelpButton.jsx";
const WithdrawMob = () => {
  const [inputValue, setInputValue] = useState("");
  const [isbtnLoad, setIsButtonLoad] = useState(false);
  const users = useSelector((state) => state.user.user);
  console.log(users);
  const { accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);
  const handleChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value <= 10000) {
      setInputValue(value);
    }
  };

  const handleClick = async () => {
    // Replace this with your desired action on button click
    if (inputValue === "") {
      toast.warning("please select amount");
      setIsButtonLoad(false);
      return;
    }
    if (inputValue > users?.walletDetails?.withDrawlAmount) {
      toast.warning(
        "withdrawal request amount should be less or equal to wihdrawal amount"
      );

      return;
    }
    if (inputValue < 10 || inputValue > 2000) {
      toast.warning("please select amount between 10 and 2000");
      return;
    }
    setIsButtonLoad(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const response = await axios.post(
        "api/payment/withdrawl",
        {
          amount: inputValue,
        },
        {
          headers: {
            Authorization: `bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setInputValue("");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
    setIsButtonLoad(false);
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
            Withdraw Cash
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
          <div className="flex justify-between ">
            <span>withdrawal Balance</span>
            <span>₹ {users?.walletDetails?.withDrawlAmount}</span>
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
                Withdraw
              </button>
            )}
          </div>
        </div>
        <div className="font-[Nunito-Sans] text-white relative text-center pb-32">
          *Minimum Withdraw Amount ₹ 10
        </div>
      </div>
    </div>
  );
};

export default WithdrawMob;
