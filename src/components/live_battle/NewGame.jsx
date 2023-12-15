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
import DropIcon from "../../assets/new_game/dropdown.svg";
import Copy from "../../assets/new_game/copy.svg";
import Share from "../../assets/new_game/share.svg";
import Fb from "../../assets/new_game/fb.svg";
import Wp from "../../assets/new_game/wp.svg";
import Twtr from "../../assets/new_game/twtr.svg";
import Search from "../../assets/new_game/search.svg";
import Filter from "../../assets/new_game/filter.svg";
import LowToHigh from "../../assets/new_game/lowtohigh.svg";
import HighToLow from "../../assets/new_game/hightolow.svg";
import { Link } from "react-router-dom";

const NewGame = () => {
  return (
    <div>
      <div
        id="NewGameRoot"
        className="bg-[#0f002b] flex flex-row gap-8 w-full items-center"
      >
        {/* left-side bar starts */}
        <div className="bg-white flex flex-col pb-16 gap-6 md:w-1/5 md:h-[720px]  items-start">
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
          <div className="flex flex-col justify-center ml-5 gap-2 w-0 h-0 md:w-4/5 md:h-4/5 items-center">
            <Link
              to="/"
              className="border-solid items-center border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#ffcc4d] flex flex-row gap-2 w-full h-8 pt-1 px-3 border rounded-lg"
            >
              <img
                src={AddGame}
                alt="ContentAdd icon"
                id="Materialsymbolsadd"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold text-[#0f002b]">
                New game
              </div>
            </Link>
            <Link
              to="/profile"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
            >
              <img
                src={Profile}
                alt="SocialPersonOutline icon"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Profile
              </div>
            </Link>
            <Link
              to="/wincash"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
            >
              <img src={WinCash} alt="Twemojimoneymouthface" className="w-5" />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Win Cash
              </div>
            </Link>
            <Link
              to="/mywallet"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
            >
              <img
                src={Wallet}
                alt="Phwalletlight"
                id="Phwalletlight"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                My Wallet
              </div>
            </Link>
            <Link
              to="/gamehistory"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
            >
              <img
                src={GameHistory}
                alt="ActionHistory icon"
                id="Mdihistory"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Game History
              </div>
            </Link>
            <Link
              to="/transactionhistory"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
            >
              <img
                src={Profile}
                alt="SocialPersonOutline icon"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Transaction History
              </div>
            </Link>
            <Link
              to="/referr&earn"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
            >
              <img
                src={ReferEarn}
                alt="Gameiconsreceivemoney"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Refer and Earn
              </div>
            </Link>
            <Link
              to="/notification"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
            >
              <img
                src={Notification}
                alt="Iconamoonnotificationlight"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Notification
              </div>
            </Link>
            <Link
              to="/support"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
            >
              <img src={Support} alt="Supportagent" className="w-5" />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Support
              </div>
            </Link>
          </div>
          {/* menue section ends */}
        </div>
        {/* left-side bar ends */}
        {/* right side contents starts */}
        <div className="flex flex-col mt-8 gap-8 w-3/4 items-start">
          {/* live battle and sort battle section starts */}
          <div className="relative flex flex-row justify-center w-full items-start">
            {/* live battle section  */}
            <div className="w-full h-[387px] overflow-hidden bg-[#ffb653] absolute top-0 left-0 flex flex-col justify-end pt-6 gap-px items-start rounded-lg">
              {/* heading for both section */}
              <div className="flex flex-row justify-between ml-6 w-3/5 items-start">
                <div
                  id="LiveBattle1"
                  className="text-center text-xl font-['Inter']"
                >
                  live <span className="font-bold">battle</span>
                </div>
                <div
                  id="SortBattle1"
                  className="text-center text-xl font-['Inter']"
                >
                  sort <span className="font-bold">battle</span>
                </div>
              </div>
              <div className="relative flex flex-row justify-between mb-[-21px] w-full items-start pt-6 pl-16 pr-20">
                {/* fees content */}
                <div className="shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.25)] bg-[#fca837] relative flex flex-col justify-end mt-px gap-3 w-2/5 items-start pt-4 pb-1 px-1 rounded-lg">
                  <div className="font-['Inter'] text-white ml-4 md:text-[16px]">
                    open challenge from
                    <span className="font-bold pl-1 text-[#0f002b]">
                      ravan3p
                    </span>
                  </div>
                  <div className="shadow-[inset_0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#c58134] flex flex-row gap-14 w-full items-start pt-4 pr-8 pb-4 pl-4 rounded-br-lg rounded-bl-lg">
                    <div className="flex flex-col flex-wrap gap-3 md:w-auto items-center">
                      <div className="flex flex-row gap-4 w-full items-start md:text-[16px]">
                        <div className="font-['Inter'] text-white">
                          Entry fee
                        </div>
                        <div className="font-['Inter'] font-bold text-[#0f002b]">
                          ₹40
                        </div>
                      </div>
                      <div className="flex flex-row gap-12 w-full items-start md:text-[16px]">
                        <div className="font-['Inter'] text-white ">Prize</div>
                        <div className="font-['Inter'] font-bold text-[#0f002b]">
                          ₹80
                        </div>
                      </div>
                    </div>
                    <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-1 p-1 w-10 h-10 flex-shrink-0 flex-nowrap  items-center rounded-[32px]">
                      <img
                        src={LiveBattle}
                        alt="Arcticonsbattleforwesnoth"
                        className="w-5"
                      />
                    </div>
                  </div>
                </div>
                <div className="shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.25)] w-1/3 h-[146px] bg-[#fca837] absolute top-[60%] left-16 flex flex-col justify-center gap-3 items-center pt-4 pb-1 px-1 rounded-lg">
                  <div className="font-['Inter'] text-white ml-4 md:text-[16px]">
                    open challenge from
                    <span className="font-bold pl-1 text-[#0f002b]">
                      kansh23i
                    </span>
                  </div>
                  <div className="shadow-[inset_0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#c58134] flex flex-row gap-16 w-full h-24 items-center  pt-4 pr-8 pb-4 pl-4 rounded-br-lg rounded-bl-lg">
                    <div className="flex flex-col gap-3 w-3/5 items-start">
                      <div className="flex flex-row gap-4 md:w-auto items-start">
                        <div className="font-['Inter'] text-white md:text-[16px]">
                          Entry fee
                        </div>
                        <div className="font-['Inter'] font-bold text-[#0f002b]">
                          ₹61
                        </div>
                      </div>
                      <div className="flex flex-row gap-12 w-full items-start">
                        <div className="font-['Inter'] text-white">Prize</div>
                        <div className="font-['Inter'] font-bold text-[#0f002b]">
                          ₹230
                        </div>
                      </div>
                    </div>
                    <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-1 p-1 w-10 h-10 items-center rounded-[32px]">
                      <img
                        src={LiveBattle}
                        alt="Arcticonsbattleforwesnoth1"
                        className="w-5"
                      />
                    </div>
                  </div>
                </div>
                {/* High to Low section */}
                <div
                  id="Grad"
                  className="w-full h-44 bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_0%,#ffffff_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-[193px] left-0 flex flex-row justify-end items-start pt-12 px-20"
                >
                  <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-4 w-2/5  items-center p-3 px-5 rounded-lg">
                    <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex flex-row md:w-8 md:h-8 items-center pt-1 px-1 rounded-2xl">
                      <img
                        src={HighToLow}
                        alt="EditorFormatLineSpacing icon"
                        id="Carbonsortdescending"
                        className="w-5"
                      />
                    </div>
                    <div className="font-['Inter']">High to Low</div>
                  </div>
                </div>
                {/* High to Low section */}
                <div
                  id="Line"
                  className="border-solid w-px h-[278px] absolute top-0 left-[50%] border-r border-l-0 border-black border-y-0"
                />
                <div className="relative flex flex-col justify-between mb-[146px] gap-4 w-2/5 items-center">
                  <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-4 w-full h-14 items-center p-6  rounded-[10px]">
                    {/* search field */}
                    <img
                      src={Search}
                      alt="ActionSearch icon"
                      id="Carbonsearch"
                      className="w-5"
                    />
                    <div className="font-['Inter'] text-black/56.99999999999999 mt-px">
                      Search Battle
                    </div>
                  </div>
                  {/* search field */}
                  {/* filter section */}
                  <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-6 w-full h-14 items-center p-6  rounded-lg">
                    <div className="flex flex-row  gap-1 w-12 items-center">
                      <div className="text-center font-['Inter'] text-[#0f002b]">
                        ₹
                      </div>
                      <div className="text-center font-['Inter'] px-2 text-black/56.99999999999999">
                        From
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 w-20 items-center">
                      <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex flex-row w-8 h-8 items-start p-2 rounded-2xl">
                        <img
                          src={Filter}
                          alt="Iconoirfilter"
                          id="Iconoirfilter"
                          className="w-5"
                        />
                      </div>
                      <div className="flex flex-row  gap-1 w-8 items-start">
                        <div className="text-center font-['Inter'] text-[#0f002b]">
                          ₹
                        </div>
                        <div
                          id="To"
                          className="font-['Inter'] px-2 text-black/56.99999999999999 text-center"
                        >
                          To
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* filter section */}
                  {/* low to high section */}
                  <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-4 w-full h-14 items-center p-6 rounded-lg">
                    <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex flex-row w-8 h-8 items-center p-1 rounded-2xl">
                      <img
                        src={LowToHigh}
                        alt="Mdisortascending"
                        id="Mdisortascending"
                        className="w-5"
                      />
                    </div>
                    <div className="font-['Inter'] ">Low to High</div>
                  </div>
                  {/* low to high section */}
                </div>
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white relative flex flex-row justify-center mt-[357px] p-4 w-12 h-12 items-start rounded-[24px]">
              <img
                src={DropIcon}
                alt="HardwareKeyboardArrowDown icon"
                id="Phcaretdown"
                className="w-6"
              />
            </div>
          </div>
          {/* live battle and sort battle section ends */}
          {/* own battle starts */}
          <div className="bg-[#ffb653] flex flex-col gap-2 w-full h-48 items-start pl-6 py-6 rounded-lg">
            <div className="flex flex-row justify-between w-4/5 items-start">
              <div className="flex flex-col gap-6 w-1/2 items-start">
                <div
                  id="StartYourOwnBattle1"
                  className="text-center text-xl font-['Inter']"
                >
                  start your own <span className="font-bold">battle</span>
                </div>
                <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center items-center ml-8  gap-10 w-[290px] pt-2 px-2 rounded-lg">
                  <div className="inline-flex gap-[10px] w-3/5 items-start mx-auto">
                    <div className="text- font-['Inter'] text-[#0f002b]">₹</div>
                    <input
                      type="number"
                      placeholder="Your battle amount"
                      className="text-center font-['Inter'] text-black/56.99999999999999 text-xs"
                    />
                  </div>
                  <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-[#ffb653] flex items-center justify-center  w-10 h-10 p-[6px] mb-2 rounded-[20px]">
                    <img
                      src={LiveBattle}
                      alt="Arcticonsbattleforwesnoth2"
                      className="w-6 "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-2 w-1/3 items-start">
                <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white inline-flex flex-row gap-2 w-full items-start pt-1 px-4 rounded-lg">
                  <div className="bg-white flex flex-row mb-1 w-8 h-8 items-start pt-1 px-1">
                    <img
                      src={Share}
                      alt="Mdishare"
                      id="Mdishare"
                      className="w-5"
                    />
                  </div>
                  <div className="font-['Inter'] mt-1">Share link</div>
                </div>
                <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white inline-flex flex-row gap-2 w-full items-start pt-1 px-4 rounded-lg">
                  <div className="bg-white flex flex-row mb-1 w-8 h-8 items-start pt-1 px-1">
                    <img
                      src={Copy}
                      alt="Solarcopylinear"
                      id="Solarcopylinear"
                      className="w-5"
                    />
                  </div>
                  <div className="font-['Inter'] mt-1">Copy link</div>
                </div>
                <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full rounded-lg h-8 items-start p-2 px-12">
                  <img
                    src={Wp}
                    alt="Logoswhatsappicon"
                    id="Logoswhatsappicon"
                    className="w-5"
                  />
                  <img
                    src={Twtr}
                    alt="Ritwitterxfill"
                    id="Ritwitterxfill"
                    className="w-5"
                  />
                  <img
                    src={Fb}
                    alt="Logosfacebook"
                    id="Logosfacebook"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-center text-xs font-['Inter'] text-black/56.99999999999999 w-[275px] h-4 flex flex-row justify-center relative -top-8 ml-20  items-start">
                *3.5% commision on battle amount
              </div>
            </div>
          </div>
          {/* own battle ends */}
        </div>
        {/* right side contents ends */}
      </div>
    </div>
  );
};

export default NewGame;
