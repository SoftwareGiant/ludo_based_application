import React, { useState } from "react";
import AdminLogo from "../../../assets/admin_Sadmin/admin/admin.svg";
import UidLogo from "../../../assets/admin_Sadmin/admin/uid.svg";
import PasswordLogo from "../../../assets/admin_Sadmin/admin/pswd.svg";

// top pannel
import BellIcon from "../../../assets/admin_Sadmin/admin/bell.svg";
import Profile from "../../../assets/admin_Sadmin/admin/profile.png";
import LogOut from "../../../assets/admin_Sadmin/admin/logout.svg";
import Search from "../../../assets/admin_Sadmin/admin/search.svg";
// left pannel
import Deposite from "../../../assets/admin_Sadmin/admin/deposit.svg";
import Games from "../../../assets/admin_Sadmin/admin/games.svg";
import History from "../../../assets/admin_Sadmin/admin/history.svg";
import Kyc from "../../../assets/admin_Sadmin/admin/kyc.svg";
import Setting from "../../../assets/admin_Sadmin/admin/settings.svg";
import Stats from "../../../assets/admin_Sadmin/admin/stats.svg";

const NewOnboard = () => {
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    <>
      <div className="flex h-screen w-full flex-col justify-center items-start rounded-[20px] bg-[#E6E6E6]">
        {/* top bar */}
        <div className="bg-[#e6e6e6] flex flex-row justify-between w-full h-[60px] font-['Inter']">
          <div className="text-center text-xl mt-[18px] h-[24px] ml-[18px] font-normal font-['Inter'] text-black leading-normal ">
            Admin Control Panel
          </div>
          <div className="">
            <div className="shadow-[inset_0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white inline-flex rounded-[8px] gap-[10px] py-2 px-5 justify-center items-center relative top-3 right-[140px]">
              <img
                src={Search}
                alt="Search"
                id="Search"
                className="w-6 h-6 flex justify-center items-center"
              />
              <input
                type="text"
                placeholder="/ Search"
                className="font-medium text-[rgba(15,_0,_43,_0.2)] w-[187px] font-['Inter'] text-base leading-normal"
              />
            </div>
            <div className="inline-flex items-start gap-4 relative -left-[110px]">
              <div className="relative flex w-6 h-6 items-center justify-center py-[2px] px-1">
                {notification && (
                  <div
                    id="OverlayNotificationRoot"
                    className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center py-6 px-0 w-[226px] h-[72px] items-center absolute top-8 -left-56 rounded"
                  >
                    <img
                      src="https://file.rendit.io/n/WEXCU6gztqwkp6PWWWVY.svg"
                      alt="LoadSmall"
                      id="LoadSmall"
                      className="bg-[url(https://file.rendit.io/n/Q3eEhc1zniMXjQweiwy7.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat w-6"
                    />
                  </div>
                )}
                <img
                  src={BellIcon}
                  alt="Group"
                  className="w-4 h-5 absolute top-px -left-[6px] flex-shrink-0 cursor-pointer"
                  onClick={() => setNotification(!notification)}
                />
                <div
                  id="Notified"
                  className="border-solid border-white bg-[#fead3a] relative mb-3 w-2 h-2 border rounded flex-shrink-0"
                />
              </div>
              {open && (
                <div
                  id="OverlayProfileRoot"
                  className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white w-[173px] h-[216px] items-start pt-4 px-4 rounded absolute top-[35px] -left-[100px]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-[13px]">
                      <img
                        src={Profile}
                        alt="ProfileWithImage"
                        id="ProfileWithImage"
                        className="w-6 border"
                      />
                      <div className="text-xs font-medium text-[#0f002b]">
                        Profile
                      </div>
                    </div>
                    <div className="flex items-center gap-[13px]">
                      <img src={Stats} alt="Stats" id="Stats" className="w-6" />
                      <div className="text-xs font-medium text-[#0f002b]">
                        Stats
                      </div>
                    </div>
                    <div className="flex items-center gap-[13px]">
                      <img src={Games} alt="Games" id="Games" className="w-6" />
                      <div className="text-xs font-medium text-[#0f002b]">
                        Theme
                      </div>
                    </div>
                    <div className="flex items-center gap-[13px]">
                      <div
                        id="Settings"
                        className="flex flex-row justify-end w-6 h-6 items-start pt-px px-px"
                      >
                        <img
                          src={Setting}
                          alt="Games"
                          id="Games"
                          className="w-6"
                        />
                        <div
                          id="Notified"
                          className="border-solid bg-[#fead3a] w-2 h-2 border rounded absolute left-[30px]"
                        />
                      </div>
                      <div className="text-xs font-medium text-[#0f002b]">
                        Settings
                      </div>
                    </div>
                    <div className="flex items-center gap-[13px]">
                      <img
                        src={LogOut}
                        alt="Logout"
                        id="Logout"
                        className="w-6"
                      />
                      <div className="text-xs font-medium text-[#0f002b]">
                        Log Out
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <img
                onClick={() => setOpen(!open)}
                src={Profile}
                alt="ProfileWithImage"
                id="ProfileWithImage"
                className="w-6 h-6 flex justify-center items-center cursor-pointer border"
              />
              <img
                src={LogOut}
                alt="Logout"
                id="Logout"
                className="w-6 h-6 items-center justify-center flex cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* left navigation */}
        <div className=""></div>
      </div>
    </>
  );
};

export default NewOnboard;
