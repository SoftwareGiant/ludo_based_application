import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
const UpdateTournamentCard = ({
    minimum, maximum, status, commission, name, onboard
}) => {
  const [isOpen, setIsOpen] = useState(false);

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
             <div className="flex  items-center gap-4">
             <div className="p-1 gap-2 h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
               
             <Icon icon="circum:edit" width="24" />
               <span>Update Tournament Details</span>{" "}
               
             </div>
             <Menu>
                <MenuHandler>
                  <div className="flex border-gray-200 border rounded-md px-2 p-[6px] bg-[white] cursor-pointer items-center justify-between gap-4">
                    <span className="font-[Inter] text-[16.3px] ">
                     Self Bet
                    </span>
                    <Icon icon="teenyicons:down-solid" width="10" />
                  </div>
                </MenuHandler>
                <MenuList className="p-1 " >
                  <MenuItem
                    // onClick={() => setRole("Admin")}
                    className=" font-[Inter] text-[16px] text-[#000000] font-medium flex justify-start items-center"
                  >
                   Yes
                  </MenuItem>
                  <MenuItem
                    // onClick={() => setRole("Super Admin")}
                    className="font-[Inter] text-[15px] text-[#000000] font-medium flex justify-start  items-center"
                  >
                  No
                  </MenuItem>
                
                </MenuList>
              </Menu>
             {/* <span>{utr}</span> */}
             </div>
             <div className="flex items-center gap-2">
             <div className="w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                <span>Refresh</span>{" "}
                <Icon icon="material-symbols:refresh" width="24" />
              </div>
             <div  onClick={closeModal} className="bg-[#F4F4F4] flex items-center justify-center hover:bg-blue-gray-100 text-white font-bold p-2 rounded-full w-[48px] h-[38.4px]">
              <Icon icon="icon-park-outline:message-sent" width="24" className="text-black" />
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
              
                <div className="w-full px-8 py-2 flex flex-col   min-w-max mt-12 text-center font-[Inter] font-medium text-[16px]">
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Name</span>
                      </div>
                      <span>{name}
                  
                      </span>
                      
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Status</span>
                      </div>
                      <span>{status}</span>
                    </div>      
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Live Playing</span>
                      </div>
                      <span>23,453</span>
                    </div>          
                  </div>
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Minimum Bet</span>
                      </div>
                      <span>{minimum}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m-2 cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Maximum Bet</span>
                      </div>
                      <span>{maximum}</span>
                    </div>  
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m-2 cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Commission (%)</span>
                      </div>
                      <span>{commission}</span>
                    </div>               
                  </div>
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Commission Collected</span>
                      </div>
                      <span>{commission}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m-2 cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Running Time</span>
                      </div>
                      <span>81 days</span>
                    </div>  
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m-2 cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Starting Date</span>
                      </div>
                      <span>{onboard}</span>
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

export default UpdateTournamentCard;
