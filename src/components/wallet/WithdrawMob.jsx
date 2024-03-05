import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarMob } from "../MainLayout/SidebarMob";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import { useState } from "react";
import "../../app.css";
import { Icon } from "@iconify-icon/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../live_battle/userSlice";
import axios from "axios";
import ButtonLoader from "../MainLayout/ButtonLoader.jsx";
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
    setInputValue(event.target.value);
  };

  const handleClick = async () => {
    setIsButtonLoad(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Replace this with your desired action on button click
    if (inputValue === "") {
      alert("please select amount");
      setIsButtonLoad(false);
      return;
    }
    if (inputValue > users?.walletDetails?.withDrawlAmount) {
      alert(
        "withdrawl request amount should be less or equal to wihdrawl amount"
      );
      setIsButtonLoad(false);
      return;
    }
    if (inputValue < 10 || inputValue > 2000) {
      alert("please select amount between 10 and 2000");
      setIsButtonLoad(false);
      return;
    }
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
      alert(response.data.message);
      if (response.status === 200) {
        setInputValue("");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
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
          onClick={() => navigate("/profile")}
          src={FrameProfile}
          alt="Frame1"
          className="mt-1 w-8 h-8 border rounded-[100px]"
        />
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
            <div onClick={handleClick}>
              {isbtnLoad ? <ButtonLoader /> : "Withdraw"}
            </div>
          </div>
          <div
            onClick={() => setInputValue(501)}
            className="text-right text-[0F002B] font-[Nunito-Sans] opacity-[83%] font-bold cursor-pointer"
          >
            Withdraw ₹ 501
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
