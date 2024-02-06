import React from "react";
import { Link } from "react-router-dom";
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

const Sidebar = ({
  isClick1,
  isClick2,
  isClick3,
  isClick4,
  isClick5,
  isClick6,
  isClick7,
  isClick8,
  isClick9,
}) => {
  return (
    <div className="bg-white flex flex-col pb-16 gap-6  h-[100vh] w-[270px]  items-start">
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
        <Link
          to="/"
          className={`border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]   ${
            isClick1 ? "bg-[#ffcc4d]" : "bg-white"
          } flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg`}
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
          className={`border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] ${
            isClick2 ? "bg-[#ffcc4d]" : "bg-white"
          } flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg`}
        >
          <img src={Profile} alt="SocialPersonOutline icon" className="w-5" />
          <div className="text-xs font-['Nunito_Sans'] font-bold">Profile</div>
        </Link>
        <Link
          to="/wincash"
          className={`border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  ${
            isClick3 ? "bg-[#ffcc4d]" : "bg-white"
          } flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg`}
        >
          <img src={WinCash} alt="Twemojimoneymouthface" className="w-5" />
          <div className="text-xs font-['Nunito_Sans'] font-bold">Win Cash</div>
        </Link>
        <Link
          to="/mywallet"
          className={`
         
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg
          ${isClick4 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
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
          className={`
       
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg
          ${isClick5 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
        >
          <img
            src={GameHistory}
            alt="ActionHistory icon"
            id="lgihistory"
            className="w-5"
          />
          <div className="text-xs font-['Nunito_Sans'] font-bold">
            Game History
          </div>
        </Link>
        <Link
          to="/transactionhistory"
          className={`
        
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg
          ${isClick6 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
        >
          <img src={Profile} alt="SocialPersonOutline icon" className="w-5" />
          <div className="text-xs font-['Nunito_Sans'] font-bold">
            Transaction History
          </div>
        </Link>
        <Link
          to="/referr&earn"
          className={`
          
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg
          ${isClick7 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
        >
          <img src={ReferEarn} alt="Gameiconsreceivemoney" className="w-5" />
          <div className="text-xs font-['Nunito_Sans'] font-bold">
            Refer and Earn
          </div>
        </Link>
        <Link
          to="/notification"
          className={`
        
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg
          ${isClick8 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
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
          className={`
       
          border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg
          ${isClick9 ? "bg-[#ffcc4d]" : "bg-white"}
          `}
        >
          <img
            src={Support}
            alt="Materialsymbolssupportagent"
            className="w-5"
          />
          <div className="text-xs font-['Nunito_Sans'] font-bold">Support</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
