import React from "react";
import { Icon } from "@iconify-icon/react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
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
import ButtonLoader from "../../MainLayout/ButtonLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  logoutAsync,
  selectRefreshToken,
  selectToken,
} from "../../app_start/authSlice";

const AdminTopbar = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const refreshtoken = useSelector(selectRefreshToken);

  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    dispatch(logoutAsync({ token, refreshtoken }));
  };
  return (
    <div className="flex font-[Inter] p-2 items-center justify-between ">
      <p onClick={()=>navigate("/newonboard")} className="cursor-pointer text-[20px]">Admin Control Panel</p>
      <div className="flex gap-2 items-center">
        <div className="bg-[#ffff] h-[40px] w-[253px] p-2 gap-3 rounded-lg flex items-center">
          <Icon icon="material-symbols:search" width="24" />
          <input
            type="text"
            placeholder="/Search"
            className="outline-none w-full"
          />
        </div>
        <div className="flex justify-between w-[104px] h-[24px]">
          <Menu>
            <MenuHandler>
              <Icon
                className="cursor-pointer"
                icon="iconamoon:notification-light"
                width="24"
              />
            </MenuHandler>
            <MenuList className="h-20 flex justify-center items-center">
              <ButtonLoader />
            </MenuList>
          </Menu>
          <div className="border-white border rounded-full w-[27px] h-[26px] overflow-hidden ">
            <Menu>
              <MenuHandler>
                
                <img
                  src="https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774"
                  className="h-full w-[50px] scale-x-150 cursor-pointer"
                />
              </MenuHandler>
              <MenuList className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white w-[173px] h-[216px] p-0 m-0">
                <MenuItem className="flex items-center gap-2">
                  <div className="flex items-center gap-[13px]">
                    <img
                      src="https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774"
                      alt="ProfileWithImage"
                      id="ProfileWithImage"
                      className="w-[24px] h-[24px] rounded-full  border"
                    />
                    <div className="text-xs font-medium text-[#0f002b]">
                      Profile
                    </div>
                  </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                  <div className="flex items-center gap-[13px]">
                    <img src={Stats} alt="Stats" id="Stats" className="w-6" />
                    <div className="text-xs font-medium text-[#0f002b]">
                      Stats
                    </div>
                  </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                  <div className="flex items-center gap-[13px]">
                    <img src={Games} alt="Games" id="Games" className="w-6" />
                    <div className="text-xs font-medium text-[#0f002b]">
                      Theme
                    </div>
                  </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
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
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                  <div
                  
                    className="flex items-center gap-[13px]"
                  >
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
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <Icon
            onClick={handleLogout}
            icon="material-symbols:logout"
            width="24"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
