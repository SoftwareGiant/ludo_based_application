import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import key from "../../../../assets/admin_Sadmin/admin/key.svg";
const UpdateAdminCard = ({ name, status, onboard, mobno, position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState(position);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex gap-3 mb-3">
      <div
        onClick={openModal}
        className="hover:bg-blue-gray-100 flex justify-center items-center w-10 h-10 rounded-md cursor-pointer transition-all ease-in-out"
      >
        <Icon icon="circum:edit" width="24" />
      </div>
      {isOpen && (
        <div className="rounded-md fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute  inset-0 bg-black opacity-50"></div>
          <div className="bg-white w-[826px] rounded-md shadow-lg z-50">
            <div className="flex px-2 items-center rounded-t-md bg-[#EEEEEE] w-full h-[80px] justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1 gap-2 h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                  <Icon icon="circum:edit" width="24" />
                  <span>Update Admin Details</span>{" "}
                </div>
                <div
                  className={`${
                    role === "Admin" ? "bg-[#BFCAFF]" : "bg-[#A9E5C8]"
                  }  px-2 p-1 rounded-md flex items-center text-[19.2px]`}
                >
                  {role}
                </div>

                <Menu>
                  <MenuHandler>
                    <div className="flex border-gray-200 border rounded-md px-2 p-[6px] bg-[white] cursor-pointer items-center justify-between gap-4">
                      <span className="font-[Inter] text-[16.3px] ">Role</span>
                      <Icon icon="teenyicons:down-solid" width="10" />
                    </div>
                  </MenuHandler>
                  <MenuList className="p-1">
                    <MenuItem
                      onClick={() => setRole("Admin")}
                      className="font-[Inter] text-[16px] text-[#000000] font-medium flex justify-start items-center"
                    >
                      Admin
                    </MenuItem>
                    <MenuItem
                      onClick={() => setRole("Super Admin")}
                      className="font-[Inter] text-[15px] text-[#000000] font-medium flex justify-start  items-center"
                    >
                      Super Admin
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
              <div className="flex items-center gap-2">
                {role === "Admin" && (
                  <div
                    onClick={closeModal}
                    className="bg-[#F4F4F4] flex items-center justify-center hover:bg-blue-gray-100 text-white font-bold p-2 rounded-full w-[48px] h-[38.4px]"
                  >
                    <img src={key} />
                  </div>
                )}

                <div
                  onClick={closeModal}
                  className="bg-[#F4F4F4] flex items-center justify-center hover:bg-blue-gray-100 text-white font-bold p-2 rounded-full w-[48px] h-[38.4px]"
                >
                  <Icon
                    icon="icon-park-outline:message-sent"
                    width="24"
                    className="text-black"
                  />
                </div>
                <button
                  onClick={closeModal}
                  className="bg-[#F4F4F4] hover:bg-blue-gray-100 text-white font-bold p-2 rounded-full w-[48px] h-[38.4px]"
                >
                  <Icon icon="charm:cross" className="text-black" width="24" />
                </button>
              </div>
            </div>
            <div className="w-full h-[465px] flex ">
              <div className="flex flex-col w-[40%] justify-center items-center m-auto text-[#0F002B]  font-[Nunito-Sans]">
                <img
                  alt="user"
                  className="w-[200px] h-[200px] rounded-full"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <span className="flex items-center font-bold text-[30px]">
                  {name.slice(-6)}{" "}
                  <Icon icon="bitcoin-icons:verify-outline" width="26" />
                </span>
                <span className="font-normal text-[20px]">@admin01</span>
              </div>
              <div className=" p-2 flex flex-col w-[60%] min-w-max mt-12 text-center font-[Inter] font-medium text-[16px]">
                <div className="flex w-full mb-4 justify-between">
                  <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                    <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <span>Name</span>
                    </div>
                    <span>{name.slice(-6)}</span>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                    <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <span>Number</span>
                    </div>
                    <span>{mobno}</span>
                  </div>
                </div>
                <div className="flex w-full mb-4 justify-between">
                  <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                    <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <span>Position</span>
                    </div>
                    <span>{role}</span>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                    <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <span>Status</span>
                    </div>
                    <span>{status}</span>
                  </div>
                </div>
                <div className="flex w-full mb-4 justify-between">
                  <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                    <div className="m-2  cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <span>Onboard Date</span>
                    </div>
                    <span>{onboard}</span>
                  </div>
                  <div className="flex flex-col justify-start items-center gap-4  mx-2 w-full">
                    <div className="m-2 text-[#FF0000] cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <span>Revoke {role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateAdminCard;
