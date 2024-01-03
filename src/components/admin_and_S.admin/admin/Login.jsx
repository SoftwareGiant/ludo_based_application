import React from "react";
import AdminLogo from "../../../assets/admin_Sadmin/admin/admin.svg";
import UidLogo from "../../../assets/admin_Sadmin/admin/uid.svg";
import PasswordLogo from "../../../assets/admin_Sadmin/admin/pswd.svg";
const Login = () => {
  return (
    <>
      <div className="flex w-full h-[100vh] py-[135px] px-[186px] justify-center items-center flex-shrink-0 bg-blue-400 bg-opacity-40 ">
        <div className="w-[713px] h-[451px] flex-shrink-0 rounded-[20px] border border-solid border-black border-opacity-20 backdrop-blur-[30px] bg-[rgba(255,_255,_2555,_0.28)]">
          {/* toggle button */}
          <div className="inline-flex items-center gap-2 w-[125px] h-10 mt-6 ml-6">
            <div className="flex w-[62px] h-full py-1 pr-6 pl-0 items-center flex-shrink-0 rounded-[20px] border-2 border-solid border-black border-opacity-20 bg-[rgba(172,_158,_255,_0.52)]">
              <div className="flex w-9 h-9 p-[6px] justify-center items-center flex-shrink-0 rounded-[18px] border-2 border-solid border-white bg-[#8060FF]">
                <img src={AdminLogo} alt="" className="w-6 h-6" />
              </div>
            </div>
            <p className="text-[#8660FF] text-center text-base font-['Inter'] font-bold leading-normal">
              ADMIN
            </p>
          </div>
          {/* login details */}
          <div className="inline-flex flex-col items-center gap-6 absolute top-[100.5px] left-[56px] w-[272px] h-[251px]">
            <div className="flex flex-col gap-4 w-full items-end py-6">
              <div className="flex flex-row gap-4 w-[272px] h-[60px] items-center py-3 px-5 border-black/80 border-solid border-2 rounded-[30px]">
                <img
                  src={UidLogo}
                  alt="Solaruseridlinear"
                  id="Solaruseridlinear"
                  className="w-9 h-9"
                />
                <input
                  type="text"
                  placeholder="ID / Mobile Number"
                  className="font-medium text-black/50 bg-transparent w-[180px] font-['Inter'] text-base  leading-normal"
                />
              </div>
              <div className="flex flex-row gap-4 w-[272px] h-[60px] items-center py-3 px-5 border-black/80 border-solid border-2 rounded-[30px]">
                <img
                  src={PasswordLogo}
                  alt="Solarlocklinear"
                  id="Solarlocklinear"
                  className="w-8"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="font-medium text-black/50 bg-transparent w-[180px] font-['Inter'] text-base  leading-normal"
                />
              </div>
            </div>
            <div className="items-center font-medium text-white flex py-3 px-5 gap-4 justify-center w-[104px] h-[43px] border-2 border-solid border-white rounded-[30px] bg-[#8060ff]">
              Proceed
            </div>
          </div>
          {/* side image */}
        </div>
      </div>
    </>
  );
};

export default Login;
