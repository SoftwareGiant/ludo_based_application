import React from "react";
import "../../app.css";

import AddGame from "../../assets/new_game/addgame.svg";
import Profile from "../../assets/new_game/profile.svg";
import WinCash from "../../assets/new_game/wincash.svg";
import Wallet from "../../assets/new_game/wallet.svg";
import GameHistory from "../../assets/new_game/history.svg";
import ReferEarn from "../../assets/new_game/refer&earn.svg";
import Notification from "../../assets/new_game/notification.svg";
import Support from "../../assets/new_game/support.svg";
import LiveBattle from "../../assets/new_game/livebattle.svg";
import Filter from "../../assets/new_game/filter.svg";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import Bank from "../../assets/wallet/bank.svg";

const MyWalletPc = () => {
  return (
    <div>
      <div
        id="ProfileRoot"
        className="bg-[#0f002b] flex flex-row justify-between w-full h-[100vh] items-start"
      >
        {/* menue bar section */}
        <div className="bg-white flex flex-col pb-16 gap-6 w-1/5 h-[100vh] items-start">
          <div className="flex flex-col w-full items-start">
            <div className="relative flex flex-row justify-center w-full items-start">
              <div className="w-full h-48 bg-background bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0 flex flex-row items-start">
                <div className="bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_0%,#ffffff_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat mt-40 w-full h-10" />
              </div>
              <div className="text-center text-3xl font-['Nunito_Sans'] font-bold text-[#0e002b] relative mt-48">
                LUDO KING
              </div>
            </div>
            <div className="text-center text-xl font-['Oooh_Baby'] mx-auto">
              punch line
            </div>
          </div>
          <div className="flex flex-col justify-center mx-auto gap-2 w-4/5 items-center">
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg">
              <img
                src={AddGame}
                alt="ContentAdd icon"
                id="Materialsymbolsadd"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold text-[#0f002b]">
                New game
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#ffcc4d] flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg">
              <img
                src={Profile}
                alt="SocialPersonOutline icon"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Profile
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg">
              <img src={WinCash} alt="Twemojimoneymouthface" className="w-5" />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Win Cash
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg">
              <img
                src={Wallet}
                alt="Phwalletlight"
                id="Phwalletlight"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                My Wallet
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg">
              <img
                src={GameHistory}
                alt="ActionHistory icon"
                id="Mdihistory"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Game History
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg">
              <img
                src={Profile}
                alt="SocialPersonOutline icon"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Transaction History
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg">
              <img
                src={ReferEarn}
                alt="Gameiconsreceivemoney"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Refer and Earn
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg">
              <img
                src={Notification}
                alt="Iconamoonnotificationlight"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Notification
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg">
              <img
                src={Support}
                alt="Materialsymbolssupportagent"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Support
              </div>
            </div>
          </div>
        </div>
        {/* menue bar section */}
        {/* Profile section */}
        <div className="flex flex-col mt-16 gap-24 w-1/3 h-[100vh] items-start">
          <div className="flex flex-col gap-8 w-full items-start">
            {/* Profile Logo */}
            <div className="flex ">
              <img
                src={FrameProfile}
                alt="Frame50"
                className="w-[60px] h-[60px] flex-shrink-0 rounded-[100px] border border-solid border-white"
              />
              <div>
                <div className="text-center text-xl font-normal font-['Nunito_Sans'] text-white w-[115px] h-[27px] mt-[2px] ml-4 leading-normal ">
                  Ludo Player
                </div>
                <div className="text-center text-[16px] font-normal font-['Nunito_Sans'] text-white w-min leading-normal ml-4 ">
                  @ludoplayer
                </div>
              </div>
            </div>
            {/* Profile Logo ends*/}
            {/* Deposite Section */}
            <div className="bg-[#ffb653] flex flex-col justify-center pl-4 gap-10 w-full h-56 items-start rounded-[10px] ">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.25)] bg-white inline-flex justify-center py-3 px-6 gap-2 w-[116px] h-[54px] items-start rounded-[15px]">
                  <div className="text-2xl font-['Inter'] text-[#0f002b]">
                    ₹
                  </div>
                  <div className="text-2xl font-['Inter'] font-bold text-[#0f002b]">
                    501
                  </div>
                </div>
                <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white inline-flex justify-center py-2 px-4 gap-[5px] w-32 h-9 items-start rounded-[10px] mr-4 ">
                  <img
                    src={AddGame}
                    alt="ContentAdd icon"
                    id="Materialsymbolsadd"
                    className="w-5"
                  />
                  <div className="font-['Inter'] text-[#0f002b]">add cash</div>
                </div>
              </div>
              <div className="flex flex-col ml-1 w-full items-start">
                <div className="font-['Nunito_Sans']  flex flex-row justify-center pt-2  h-10 items-start rounded-lg">
                  Deposit Cash
                </div>
                <div className="text-xs font-['Nunito_Sans'] flex flex-row justify-center ml-1 pt-2 w-full h-12 items-start rounded-lg">
                  Can be used to play Tournaments & Battles. Cannot be withdrawn
                  to Paytm or Bank.
                </div>
              </div>
            </div>
            {/* Deposite Section ends */}
            {/* Deposite Section 2 */}
            <div className="bg-[#ffb653] flex flex-col justify-center pl-4 gap-10 w-full h-[216px] items-start rounded-[10px]">
              <div className="flex flex-row gap-24 w-full items-start">
                <div className="shadow-[0px_0px_6px_0px_rgba(0,_0,_0,_0.25)] bg-white inline-flex justify-center py-3 px-6 gap-2 w-[116px] h-[54px] items-start rounded-[15px]">
                  <div className="text-2xl font-['Inter'] text-[#0f002b]">
                    ₹
                  </div>
                  <div className="text-2xl font-['Inter'] font-bold text-[#0f002b]">
                    1001
                  </div>
                </div>
                <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white inline-flex justify-center py-2 px-4 gap-[5px] w-32 h-9 items-start rounded-[10px] mr-4">
                  <img src={Bank} alt="Cilbank" id="Cilbank" className="w-5" />
                  <div className="font-['Inter'] text-[#0f002b]">withdraw</div>
                </div>
              </div>
              <div className="flex flex-col ml-1 w-full items-start">
                <div className="font-['Nunito_Sans'] flex flex-row justify-center pt-2  h-10 items-start rounded-lg">
                  Winning Cash
                </div>
                <div className="text-xs font-['Nunito_Sans'] flex flex-row justify-center ml-1 pt-2 w-full h-12 items-start rounded-lg">
                  Can be withdrawn to Paytm or Bank. Can be used to play
                  Tournaments & Battles.
                </div>
              </div>
            </div>
            {/* Deposite Section ends */}
          </div>
        </div>
        {/* Profile section */}
        {/* battle section */}
        <div className="bg-[#ffb653] flex flex-col gap-16 w-2/5 h-[100vh] items-start pt-6 pb-20">
          <div className="flex flex-col gap-10 w-full items-start">
            <div className="flex flex-col gap-8 w-full items-start">
              <div
                id="LiveBattle1"
                className="text-black text-center font-['Inter'] text-xl  ml-4"
              >
                live <span className="font-extrabold">battle 🔥</span>
              </div>
              <div className="flex flex-col justify-between gap-8 w-full items-start">
                <div className="grid grid-cols-2 gap-3 mx-auto">
                  <div className="flex w-[176px] h-[89px] p-[2.438px] flex-col justify-center items-center flex-shrink-0 rounded-md shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#FCA837] ">
                    <div className="flex w-[100%] h-[28.0411px] items-center self-stretch pt-[7.925px] pr-[25.76px] pb-[8.11px] pl-[9.144px] rounded-t-[6.096px] rounded-b-none text-black">
                      <p className="text-white font-[Inter] text-[9.753px] font-normal">
                        open challenge
                      </p>
                      <span className="text-black font-[Inter] text-[9.753px] font-extrabold">
                        ravan3p
                      </span>
                    </div>
                    <div className="flex w-[172px] h-14 gap-9 items-center self-stretch flex-1 flex-shrink-0 basi-0 rounded-t rounded-b-[6.096px] bg-[#C58134] p-2">
                      <div className="flex flex-col w-auto h-[18px] items-start justify-center gap-[2.438px] ">
                        <div className="flex py-[3.048px] px-[3.658px] items-start gap-[9.144px] font-[Inter] text-[9.753px]">
                          <p className="text-white font-normal ">Entry fee</p>
                          <p className="text-[#0f002b] font-extrabold ">₹40</p>
                        </div>
                        <div className="flex py-[3.048px] px-[3.658px] items-start self-stretch gap-[28.041px] flex-1 flex-shrink-0 basis-0 text-[9.753px] ">
                          <p className="text-white font-normal ">Prize</p>
                          <p className="text-[#0f002b] font-extrabold ">₹80</p>
                        </div>
                      </div>
                      <div className="flex w-6 h-6 p-[6.705px] justify-center items-center rounded-[19.507px] bg-[#0F002B] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] ">
                        <img src={LiveBattle} className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[176px] h-[89px] p-[2.438px] flex-col justify-center items-center flex-shrink-0 rounded-md shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#FCA837] ">
                    <div className="flex w-[100%] h-[28.0411px] items-center self-stretch pt-[7.925px] pr-[25.76px] pb-[8.11px] pl-[9.144px] rounded-t-[6.096px] rounded-b-none text-black">
                      <p className="text-white font-[Inter] text-[9.753px] font-normal">
                        open challenge
                      </p>
                      <span className="text-black font-[Inter] text-[9.753px] font-extrabold">
                        ravan3p
                      </span>
                    </div>
                    <div className="flex w-[172px] h-14 gap-9 items-center self-stretch flex-1 flex-shrink-0 basi-0 rounded-t rounded-b-[6.096px] bg-[#C58134] p-2  ">
                      <div className="flex flex-col w-auto h-[18px] items-start justify-center gap-[2.438px] ">
                        <div className="flex py-[3.048px] px-[3.658px] items-start gap-[9.144px] font-[Inter] text-[9.753px]">
                          <p className="text-white font-normal ">Entry fee</p>
                          <p className="text-[#0f002b] font-extrabold ">₹40</p>
                        </div>
                        <div className="flex py-[3.048px] px-[3.658px] items-start self-stretch gap-[28.041px] flex-1 flex-shrink-0 basis-0 text-[9.753px] ">
                          <p className="text-white font-normal ">Prize</p>
                          <p className="text-[#0f002b] font-extrabold ">₹80</p>
                        </div>
                      </div>
                      <div className="flex w-6 h-6 p-[6.705px] justify-center items-center rounded-[19.507px] bg-[#0F002B] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] ">
                        <img src={LiveBattle} className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[176px] h-[89px] p-[2.438px] flex-col justify-center items-center flex-shrink-0 rounded-md shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#FCA837] ">
                    <div className="flex w-[100%] h-[28.0411px] items-center self-stretch pt-[7.925px] pr-[25.76px] pb-[8.11px] pl-[9.144px] rounded-t-[6.096px] rounded-b-none text-black">
                      <p className="text-white font-[Inter] text-[9.753px] font-normal">
                        open challenge
                      </p>
                      <span className="text-black font-[Inter] text-[9.753px] font-extrabold">
                        ravan3p
                      </span>
                    </div>
                    <div className="flex w-[172px] h-14 gap-9 items-center self-stretch flex-1 flex-shrink-0 basi-0 rounded-t rounded-b-[6.096px] bg-[#C58134] p-2  ">
                      <div className="flex flex-col w-auto h-[18px] items-start justify-center gap-[2.438px] ">
                        <div className="flex py-[3.048px] px-[3.658px] items-start gap-[9.144px] font-[Inter] text-[9.753px]">
                          <p className="text-white font-normal ">Entry fee</p>
                          <p className="text-[#0f002b] font-extrabold ">₹40</p>
                        </div>
                        <div className="flex py-[3.048px] px-[3.658px] items-start self-stretch gap-[28.041px] flex-1 flex-shrink-0 basis-0 text-[9.753px] ">
                          <p className="text-white font-normal ">Prize</p>
                          <p className="text-[#0f002b] font-extrabold ">₹80</p>
                        </div>
                      </div>
                      <div className="flex w-6 h-6 p-[6.705px] justify-center items-center rounded-[19.507px] bg-[#0F002B] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] ">
                        <img src={LiveBattle} className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[176px] h-[89px] p-[2.438px] flex-col justify-center items-center flex-shrink-0 rounded-md shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#FCA837] ">
                    <div className="flex w-[100%] h-[28.0411px] items-center self-stretch pt-[7.925px] pr-[25.76px] pb-[8.11px] pl-[9.144px] rounded-t-[6.096px] rounded-b-none text-black">
                      <p className="text-white font-[Inter] text-[9.753px] font-normal">
                        open challenge
                      </p>
                      <span className="text-black font-[Inter] text-[9.753px] font-extrabold">
                        ravan3p
                      </span>
                    </div>
                    <div className="flex w-[172px] h-14 gap-9 items-center self-stretch flex-1 flex-shrink-0 basi-0 rounded-t rounded-b-[6.096px] bg-[#C58134] p-2  ">
                      <div className="flex flex-col w-auto h-[18px] items-start justify-center gap-[2.438px] ">
                        <div className="flex py-[3.048px] px-[3.658px] items-start gap-[9.144px] font-[Inter] text-[9.753px]">
                          <p className="text-white font-normal ">Entry fee</p>
                          <p className="text-[#0f002b] font-extrabold ">₹40</p>
                        </div>
                        <div className="flex py-[3.048px] px-[3.658px] items-start self-stretch gap-[28.041px] flex-1 flex-shrink-0 basis-0 text-[9.753px] ">
                          <p className="text-white font-normal ">Prize</p>
                          <p className="text-[#0f002b] font-extrabold ">₹80</p>
                        </div>
                      </div>
                      <div className="flex w-6 h-6 p-[6.705px] justify-center items-center rounded-[19.507px] bg-[#0F002B] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] ">
                        <img src={LiveBattle} className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="Line"
                  className="border-solid w-full h-px border-t border-b-0 border-black/30 border-x-0"
                />
                <div
                  id="SortBattle1"
                  className=" flex items-center font-['Inter'] ml-4 text-black"
                >
                  <p className="text-xl text-center font-normal">sort</p>
                  <span className="font-extrabold pl-1 text-xl">battle</span>
                </div>
              </div>
            </div>
            {/* sort battle */}
            <div className="mx-auto shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between items-center p-[10px] w-[264px] h-14 rounded-xl">
              <div className="flex flex-row gap-1 py-0 px-2 w-[77px] h-[19px] items-center">
                <div className="text-center font-['Inter'] text-[#0f002b] w-[9px] h-5">
                  ₹
                </div>
                <input
                  type="number"
                  placeholder="From"
                  className="text-center font-['Inter'] text-[16px] font-normal text-black/56.99999999999999 w-12 h-[19px] "
                />
              </div>

              <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex flex-shrink-0 w-8 h-8 items-center justify-center p-[6px] rounded-2xl">
                <img
                  src={Filter}
                  alt="Iconoirfilter"
                  id="Iconoirfilter"
                  className="w-5"
                />
              </div>
              <div className="flex gap-1 py-0 px-2 w-[77px] items-center">
                <div className="text-center font-['Inter'] text-[#0f002b]">
                  ₹
                </div>
                <input
                  type="number"
                  placeholder="To"
                  id="To"
                  className="text-center font-['Inter'] text-[16px] font-normal text-black/56.99999999999999 w-12 h-[19px]"
                />
              </div>
            </div>
            {/* sort battle ends */}
          </div>
          <div className="flex flex-col ml-4 gap-10 w-5/6 h-32 items-start">
            <div
              id="StartYourOwnBattle1"
              className="text-center text-xl font-['Inter']"
            >
              start your own <span className="font-bold">battle</span>
            </div>
            <div className="flex h-14 w-auto p-[10px] items-center justify-center gap-[10px] mx-auto shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[10px]">
              <div className="flex items-center gap-1 w-[220px] h-auto">
                <div className="text-center font-['Inter'] text-[#0f002b] text-base font-normal">
                  ₹
                </div>
                <input
                  type="number"
                  placeholder="Your battle amount"
                  className="text-center font-['Inter'] text-black/56.99999999999999 text-base font-normal"
                />
              </div>
              <div className="flex w-10 h-10 p-[6px] justify-center items-center shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-[#ffb653] rounded-[20px]">
                <img
                  src={LiveBattle}
                  alt="Arcticonsbattleforwesnoth4"
                  className="w-7 h-7 flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
        {/* battle section */}
      </div>
    </div>
  );
};

export default MyWalletPc;
