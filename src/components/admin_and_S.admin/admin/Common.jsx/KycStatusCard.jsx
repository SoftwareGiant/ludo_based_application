import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useDispatch } from "react-redux";
import { fetchAllKyc } from "../AdminSlice/AllKycSlice";
import { toast } from "react-toastify";
import { formatDate } from "../../Functions/formateDate";
const KycStatusCard = ({ val, handleRefresh }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    if (val?.userKyc?.verificationStatus !== "pending") setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleVerification = (kycstatus) => {
    dispatch(fetchAllKyc({ status: kycstatus, uid: val?._id }))
      .then(() => {
        handleRefresh();
      })
      .catch((error) => {
        console.error("Error fetching KYC:", error);
        // Optionally handle the error here
      });
  };

  return (
    <div className="flex gap-3 mb-3">
      <div
        onClick={openModal}
        className={`rounded-xl cursor-pointer flex justify-center items-center w-[87px] h-[19px]
                         ${
                           val?.userKyc?.verificationStatus === "pending"
                             ? "bg-[#FF0000]"
                             : val?.userKyc?.verificationStatus === "inprogress"
                             ? "bg-yellow-900"
                             : "bg-[#00C300]"
                         }
                        `}
      >
        <span className="font-[Inter] font-normal text-[10px] text-[#FFFFFF] ">
          {val?.userKyc?.verificationStatus}
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
                    val?.userKyc?.verificationStatus === "inprogress"
                      ? "bg-yellow-900"
                      : "bg-green-500"
                  }  px-2 p-1 rounded-md flex items-center text-[19.2px]`}
                >
                  {val.userKyc.verificationStatus}
                </div>
                <div>UID {val?._id}</div>
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
                  {val.status && (
                    <Icon icon="bitcoin-icons:verify-outline" width="26" />
                  )}
                </span>
                <span className="font-normal text-[20px]">@{val._id}</span>
              </div>
              <div className=" p-2 flex flex-col w-[60%] min-w-max mt-12 text-center font-[Inter] font-medium text-[16px]">
                {val?.userKyc?.verificationStatus === "approved" && (
                  <div className="flex text-[#00C300] w-full mb-4 justify-between">
                    Approved on {formatDate(val?.updatedAt)}
                  </div>
                )}
                <div className="text-start font-bold text-[20px] text-[#000000]">
                  Documents Uploaded
                </div>
                <div className="flex  w-full mb-4 justify-between">
                  <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                    <Icon icon="basil:document-outline" width="24" />
                    <span>Aadhar Front</span>
                  </div>
                  <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                    <Icon icon="basil:document-outline" width="24" />
                    <span>Addhar Back</span>
                  </div>
                </div>
                <div className="flex w-full mb-4 justify-between">
                  <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                    <Icon
                      icon="material-symbols-light:keyboard-outline"
                      width="24"
                    />
                    <span>Addhar Number :</span>
                    <span>{val.userKyc.aadharNo}</span>
                  </div>
                </div>
                {val?.userKyc?.verificationStatus !== "approved" && (
                  <div className="text-start font-bold text-[20px] text-[#000000]">
                    Update Status
                  </div>
                )}
                {val?.userKyc?.verificationStatus !== "approved" && (
                  <div className="flex  w-full mb-4 justify-between">
                    <div
                      onClick={() => handleVerification("approved")}
                      className="m-2 cursor-pointer transition-colors  w-full px-3 h-[52px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  "
                    >
                      <span>Approve</span>
                      <Icon icon="mdi:approve" width="24" />
                    </div>
                    <div
                      onClick={() => handleVerification("pending")}
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
