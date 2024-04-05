import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useDispatch } from "react-redux";
import { fetchAllKyc } from "../AdminSlice/AllKycSlice";
import { toast } from "react-toastify";
const KycStatusCard = ({ status, uid, updatedAt, handleRefresh }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleReject = () => {
    toast.success("rejected kyc");

    closeModal();
  };
  const handleVerification = () => {
    dispatch(fetchAllKyc({ uid }));
    handleRefresh();
  };
  function formatDate(dateStr) {
    const date = new Date(dateStr);

    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata", // IST timezone
    };

    return date.toLocaleString("en-IN", options);
  }

  return (
    <div className="flex gap-3 mb-3">
      <div
        onClick={openModal}
        className={`rounded-xl cursor-pointer flex justify-center items-center w-[87px] h-[19px]
                         ${status ? "bg-[#00C300]" : "bg-[#FF0000]"}
                        `}
      >
        <span className="font-[Inter] font-normal text-[10px] text-[#FFFFFF] ">
          {status ? "success" : "Pending"}
        </span>
      </div>
      {isOpen && (
        <div className="rounded-md fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute  inset-0 bg-black opacity-50"></div>
          <div className="bg-white w-[826px] rounded-md shadow-lg z-50">
            <div className="flex px-2 items-center rounded-t-md bg-[#EEEEEE] w-full h-[80px] justify-between">
              <div className="flex items-center gap-2 font-bold font-sans text-[#000000]">
                <div className="p-1 gap-2 h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                  <Icon icon="mdi:list-status" width="24" />
                  <span>KYC Status</span>{" "}
                </div>
                <div
                  className={`text-white ${
                    status ? "bg-[#00C300]" : "bg-[#FF0000]"
                  }  px-2 p-1 rounded-md flex items-center text-[19.2px]`}
                >
                  {status ? "Approved" : "Pending"}
                </div>
                <div>UID {uid}</div>
              </div>
              <div className="flex items-center gap-2">
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
                  User{" "}
                  {status && (
                    <Icon icon="bitcoin-icons:verify-outline" width="26" />
                  )}
                </span>
                <span className="font-normal text-[20px]">@{uid}</span>
              </div>
              <div className=" p-2 flex flex-col w-[60%] min-w-max mt-12 text-center font-[Inter] font-medium text-[16px]">
                {status && (
                  <div className="flex text-[#00C300] w-full mb-4 justify-between">
                    Approved on {formatDate(updatedAt)}
                  </div>
                )}
                <div className="text-start font-bold text-[20px] text-[#000000]">
                  Documents Uploaded
                </div>
                <div className="flex  w-full mb-4 justify-between">
                  <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                    <Icon icon="basil:document-outline" width="24" />
                    <span>Aadhar</span>
                  </div>
                  <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                    <Icon icon="basil:document-outline" width="24" />
                    <span>Image</span>
                  </div>
                </div>
                <div className="flex w-full mb-4 justify-between">
                  <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                    <Icon icon="basil:document-outline" width="24" />
                    <span>Document Name</span>
                  </div>
                </div>
                {!status && (
                  <div className="text-start font-bold text-[20px] text-[#000000]">
                    Update Status
                  </div>
                )}
                {!status && (
                  <div className="flex  w-full mb-4 justify-between">
                    <div
                      onClick={handleVerification}
                      className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  "
                    >
                      <span>Approve</span>
                      <Icon icon="mdi:approve" width="24" />
                    </div>
                    <div
                      onClick={handleReject}
                      className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  "
                    >
                      <span>Reject</span>
                      <Icon icon="mdi:note-remove" width="24" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KycStatusCard;
