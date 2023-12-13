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
import Copy from "../../assets/new_game/copy.svg";
import Share from "../../assets/new_game/share.svg";
import Fb from "../../assets/new_game/fb.svg";
import Wp from "../../assets/new_game/wp.svg";
import Twtr from "../../assets/new_game/twtr.svg";
import Filter from "../../assets/new_game/filter.svg";
import Info from "../../assets/referr/info.svg";

const ReferrEarnPc = () => {
  return (
    <div>
      <div
        id="NewGameRoot"
        className="md:bg-[#0f002b] flex gap-8 md:w-[1085px] md:h-[720px] md:items-center"
      >
        {/* left-side bar starts */}
        <div className="bg-white flex flex-col pb-16 gap-6 md:w-[200px] md:h-[720px]  items-start">
          {/* logo and main text */}
          <div className="flex flex-col w-full items-start">
            <div className="relative flex flex-row justify-center w-full items-start">
              <div className="w-full h-48 bg-background bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0 flex flex-row items-center">
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
          {/* logo and main text */}
          {/* menue section starts */}
          <div className="md:flex md:flex-col md:justify-center md:mx-auto md:gap-2 w-0 h-0 md:w-[160px] md:h-4/5 items-center ">
            <div className="border-solid items-center border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 md:w-full md:h-[34px] pt-1 px-3 border rounded-lg">
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
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg">
              <img
                src={Profile}
                alt="SocialPersonOutline icon"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Profile
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg">
              <img src={WinCash} alt="Twemojimoneymouthface" className="w-5" />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Win Cash
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg">
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
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg">
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
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex- gap-2 w-full h-8 items-end py-[7px] px-3 border rounded-lg">
              <img
                src={Profile}
                alt="SocialPersonOutline icon"
                className="w-5"
              />
              <div className="text-[11px] font-['Nunito_Sans'] font-bold">
                Transaction History
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#ffcc4d] flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg">
              <img
                src={ReferEarn}
                alt="Gameiconsreceivemoney"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Refer and Earn
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg">
              <img
                src={Notification}
                alt="Iconamoonnotificationlight"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Notification
              </div>
            </div>
            <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg">
              <img src={Support} alt="Supportagent" className="w-5" />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Support
              </div>
            </div>
          </div>
        </div>
        {/* menue section ends */}
        {/* Profile section */}
        <div className="bg-[#0f002b] flex flex-col justify-between pb-16 md:w-[485px] md:h-[720px] items-start absolute left-[200px]">
          <div className="bg-[#0f002b] inline-flex gap-[266px] w-[485px] h-[60px] items-center md:py-4 md:pr-7 md:pl-[21px]">
            <div
              id="ReferAndEarn1"
              className="text-center text-xl font-['Inter'] text-white mt-px"
            >
              Refer and <span className="font-bold">Earn</span>
            </div>
            <img
              src={Info}
              alt="Icoutlineinfo"
              id="Icoutlineinfo"
              className="w-6"
            />
          </div>
          {/* Copy board */}
          <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white md:inline-flex mx-[166px] gap-2 md:w-[153px] md:h-10 items-center md:py-0 md:px-4 rounded-[10px] flex-shrink-0 md:absolute md:top-48">
            <div className="bg-white flex justify-center w-8 h-8 items-center p-[6px]">
              <img
                src={Copy}
                alt="Solarcopylinear"
                id="Solarcopylinear"
                className="w-5"
              />
            </div>
            <div className="font-['Inter'] font-bold text-[#0f002b] w-full text-base ">
              753478
            </div>
          </div>
          {/* Copy board ends */}
          <div className="inline-flex md:p-[10px] gap-[10px] justify-center items-center md:w-[397px] md:h-[58px] md:mx-[44px] text-white text-justify font-['Inter'] text-base font-normal absolute md:top-[292px] ">
            This is your referral link. Refer your friends and earn 1%
            commission on their winning amount.
          </div>
          {/* social media */}
          <div className="inline-flex items-center justify-center h-[52.8px] w-[292.72px] md:mx-24 px-[21.12px] gap-[10px] flex-shrink-0 shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[13.2px]">
            <div className="flex w-[42.24px] h-[42.24px] justify-center items-center p-[3.4px] ">
              <img
                src={Wp}
                alt="Logoswhatsappicon"
                id="Logoswhatsappicon"
                className="w-[35px]"
              />
            </div>
            <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-[5px] px-[4.6px] ">
              <img
                src={Fb}
                alt="Logosfacebook"
                id="Logosfacebook"
                className=" w-8"
              />
            </div>
            <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-2 px-[7.6px]">
              <img
                src={Twtr}
                alt="Ritwitterxfill"
                id="Ritwitterxfill"
                className="w-8"
              />
            </div>
            <div className="flex w-[42.24px] h-[42.24px] justify-center items-center p-[7.92px]">
              <img
                src={Copy}
                alt="ActionLabelOutline icon"
                id="Solarcopylinear1"
                className="w-8"
              />
            </div>
            <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-[4.72px] px-[5.55px] ">
              <img src={Share} alt="Mdishare" id="Mdishare" className="w-8" />
            </div>
          </div>
        </div>
        {/* Profile section ends */}
        {/* battle section */}
        <div className="bg-[#fead3a] flex flex-col md:w-[400px] md:h-[691px] md:absolute md:left-[675px] pb-8 gap-8 rounded-[20px]">
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="border-solid flex flex-col gap-6 w-full h-[332px] items-start pl-4 py-4 border-b border-black/30">
              <div
                id="LiveBattle1"
                className="text-center text-xl font-['Inter'] text-white"
              >
                live <span className="font-bold">battle 🔥</span>
              </div>
              <div className="md:mx-[-15px]">
                {/* 1st part */}
                <div className="flex flex-row mx-[10px] p-2 gap-3 w-[380px] h-[118.89px] items-start">
                  <div className="flex flex-col w-[176px] items-center justify-center p-[2.428px] border border-solid border-[rgba(15,_0,_43,_0.2)] shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[6.096px]">
                    <div className="flex flex-col w-full h-[42px] py-2 px-[9px] justify-center items-start gap-[2.42px] self-stretch ">
                      <div className="text-[9px] w-[137px] h-3 italic font-normal font-['Inter'] text-[#0f002b]">
                        open challenge from{" "}
                        <span className="font-extrabold">ravan3p</span>
                      </div>
                      <div
                        id="MinutesAgo1"
                        className="text-[9px] font-['Inter'] font-normal text-[#0f002b]"
                      >
                        . 2 minutes ago
                      </div>
                    </div>
                    <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-[6.096px] rounded-bl-[6.096px] relative flex flex-row pt-[9.103px] pr-[19.421px] pb-[9.71px] pl-[9.71px] gap-[38.13px] w-[171px] h-14 items-center">
                      <div className="flex flex-row gap-[9px] w-[79px] h-[19px] absolute top-2 py-[3.034px] px-[3.641px] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal ">
                          Entry fee
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹40
                        </div>
                      </div>
                      <div className="flex flex-row gap-[9px] w-[79px] py-[3.034px] px-[3.641px] mt-[1.5rem] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal">
                          Prize
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹80
                        </div>
                      </div>
                      <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                        <img
                          src={LiveBattle}
                          alt="Arcticonsbattleforwesnoth"
                          className="w-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[176px] items-center justify-center p-[2.428px] border border-solid border-[rgba(15,_0,_43,_0.2)] shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[6.096px]">
                    <div className="flex flex-col w-full h-[42px] py-2 px-[9px] justify-center items-start gap-[2.42px] self-stretch ">
                      <div className="text-[9px] w-[137px] h-3 italic font-normal font-['Inter'] text-[#0f002b]">
                        open challenge from{" "}
                        <span className="font-extrabold">ravan3p</span>
                      </div>
                      <div
                        id="MinutesAgo1"
                        className="text-[9px] font-['Inter'] font-normal text-[#0f002b]"
                      >
                        . 2 minutes ago
                      </div>
                    </div>
                    <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-[6.096px] rounded-bl-[6.096px] relative flex flex-row pt-[9.103px] pr-[19.421px] pb-[9.71px] pl-[9.71px] gap-[38.13px] w-[171px] h-14 items-center">
                      <div className="flex flex-row gap-[9px] w-[79px] h-[19px] absolute top-2 py-[3.034px] px-[3.641px] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal ">
                          Entry fee
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹40
                        </div>
                      </div>
                      <div className="flex flex-row gap-[9px] w-[79px] py-[3.034px] px-[3.641px] mt-[1.5rem] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal">
                          Prize
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹80
                        </div>
                      </div>
                      <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                        <img
                          src={LiveBattle}
                          alt="Arcticonsbattleforwesnoth"
                          className="w-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd part */}
                <div className="flex flex-row mx-[10px] p-2 gap-3 w-[380px] h-[118.89px] items-start">
                  <div className="flex flex-col w-[176px] items-center justify-center p-[2.428px] border border-solid border-[rgba(15,_0,_43,_0.2)] shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[6.096px]">
                    <div className="flex flex-col w-full h-[42px] py-2 px-[9px] justify-center items-start gap-[2.42px] self-stretch ">
                      <div className="text-[9px] w-[137px] h-3 italic font-normal font-['Inter'] text-[#0f002b]">
                        open challenge from{" "}
                        <span className="font-extrabold">ravan3p</span>
                      </div>
                      <div
                        id="MinutesAgo1"
                        className="text-[9px] font-['Inter'] font-normal text-[#0f002b]"
                      >
                        . 2 minutes ago
                      </div>
                    </div>
                    <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-[6.096px] rounded-bl-[6.096px] relative flex flex-row pt-[9.103px] pr-[19.421px] pb-[9.71px] pl-[9.71px] gap-[38.13px] w-[171px] h-14 items-center">
                      <div className="flex flex-row gap-[9px] w-[79px] h-[19px] absolute top-2 py-[3.034px] px-[3.641px] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal ">
                          Entry fee
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹40
                        </div>
                      </div>
                      <div className="flex flex-row gap-[9px] w-[79px] py-[3.034px] px-[3.641px] mt-[1.5rem] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal">
                          Prize
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹80
                        </div>
                      </div>
                      <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                        <img
                          src={LiveBattle}
                          alt="Arcticonsbattleforwesnoth"
                          className="w-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[176px] items-center justify-center p-[2.428px] border border-solid border-[rgba(15,_0,_43,_0.2)] shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[6.096px]">
                    <div className="flex flex-col w-full h-[42px] py-2 px-[9px] justify-center items-start gap-[2.42px] self-stretch ">
                      <div className="text-[9px] w-[137px] h-3 italic font-normal font-['Inter'] text-[#0f002b]">
                        open challenge from{" "}
                        <span className="font-extrabold">ravan3p</span>
                      </div>
                      <div
                        id="MinutesAgo1"
                        className="text-[9px] font-['Inter'] font-normal text-[#0f002b]"
                      >
                        . 2 minutes ago
                      </div>
                    </div>
                    <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-[6.096px] rounded-bl-[6.096px] relative flex flex-row pt-[9.103px] pr-[19.421px] pb-[9.71px] pl-[9.71px] gap-[38.13px] w-[171px] h-14 items-center">
                      <div className="flex flex-row gap-[9px] w-[79px] h-[19px] absolute top-2 py-[3.034px] px-[3.641px] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal ">
                          Entry fee
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹40
                        </div>
                      </div>
                      <div className="flex flex-row gap-[9px] w-[79px] py-[3.034px] px-[3.641px] mt-[1.5rem] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal">
                          Prize
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹80
                        </div>
                      </div>
                      <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                        <img
                          src={LiveBattle}
                          alt="Arcticonsbattleforwesnoth"
                          className="w-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* sort battle */}
            <div className="border-solid flex flex-col gap-8 w-full h-40 items-start pl-4 py-4 border-b border-black/30">
              <div
                id="SortBattle1"
                className="text-center text-xl font-['Inter'] text-white"
              >
                sort <span className="font-bold">battle</span>
              </div>
              <div className="flex flex-row w-[264px] h-14 p-[10px] items-center justify-center gap-[10px] shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white mx-auto rounded-lg">
                <div className="flex flex-row py-0 px-2 gap-1 w-[77px] h-[19px] items-center text-base font-normal">
                  <div className="text-center font-['Inter'] text-[#0f002b]">
                    ₹
                  </div>
                  <input
                    type="number"
                    placeholder="From"
                    className="text-center font-['Inter'] text-black/56.99999999999999 w-12 h-[19px"
                  />
                </div>
                <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex w-8 h-8 items-center justify-center p-[6px] rounded-2xl flex-shrink-0">
                  <img
                    src={Filter}
                    alt="Iconoirfilter"
                    id="Iconoirfilter"
                    className="w-5"
                  />
                </div>
                <div className="flex flex-row py-0 px-2 gap-1 w-[77px] h-[19px] items-center text-base font-normal">
                  <div className="text-center font-['Inter'] text-[#0f002b]">
                    ₹
                  </div>
                  <input
                    type="number"
                    placeholder="To"
                    className="text-center font-['Inter'] text-black/56.99999999999999 w-12 h-[19px"
                  />
                </div>
              </div>
            </div>
            {/* Sort battle Ends */}
          </div>
          <div
            id="StartYourOwnBattle1"
            className="text-left text-xl font-['Inter'] font-normal text-white ml-4"
          >
            start your own <span className="font-bold">battle</span>
          </div>
          <div className="flex w-[290px] h-14 p-[10px] justify-center items-center gap-[10px] shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white  mx-auto rounded-[10px]">
            <div className="flex flex-row gap-1 w-[220px] py-0 px-2 items-center">
              <div className="text-center font-['Inter'] text-[#0f002b]">₹</div>
              <div>
                <input
                  type="number"
                  placeholder="Your battle amount"
                  className="text-start font-['Inter'] text-black/56.99999999999999"
                />
              </div>
            </div>
            <div className="flex w-10 h-10 p-[6px] justify-center items-center shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-[#ffb653] rounded-[20px]">
              <img
                src={LiveBattle}
                alt="Arcticonsbattleforwesnoth4"
                className="mb-1 w-6"
              />
            </div>
          </div>
        </div>

        {/* battle section ends */}
      </div>
    </div>
  );
};

export default ReferrEarnPc;
