import React, { useEffect, useState } from "react";
import AdminLogo from "../../../assets/admin_Sadmin/admin/admin.svg";
import UidLogo from "../../../assets/admin_Sadmin/admin/uid.svg";
import PasswordLogo from "../../../assets/admin_Sadmin/admin/pswd.svg";
import logindesign from "../../../assets/admin_Sadmin/admin/adminloginimg.svg";
import { useNavigate } from "react-router-dom";
import { loginAsync, selectToken } from "../../app_start/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const SAdminLogin = () => {
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mob, setMob] = useState("");
  const token = useSelector(selectToken);
  useEffect(() => {
    if (token) {
      navigate("/newonboard");
    }
  }, []);
  const handleProceed = (event) => {
    if (!mob) {
      toast.error("Please enter a mobile number");
      return;
    }
    event.preventDefault();
    dispatch(loginAsync(mob))
      .unwrap()
      .then(() => {
        setMob("");
        isToggled ? navigate("/superadmin") : navigate("/newonboard");
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Login error:", error);
      });
  };
  console.log("Login success");

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div
        className={`flex w-full h-[100vh] py-[135px] px-[186px] justify-center items-center flex-shrink-0    ${
          isToggled
            ? "bg-[#28BD75] bg-opacity-40"
            : "bg-[#6079FF] bg-opacity-40"
        }`}
      >
        <div className="w-[713px] h-[451px] flex rounded-[20px] border border-solid border-black border-opacity-20 backdrop-blur-[30px] bg-[rgba(255,_255,_2555,_0.28)]">
          {/* login details */}
          <div className="flex items-center w-full flex-col flex-1">
            {/* toggle button */}
            <div className="flex w-full items-center gap-2 h-10 mt-6 ml-6">
              <button
                className={`w-16 h-10 flex items-center rounded-full p-1  ${
                  isToggled
                    ? "bg-[#28BD75] bg-opacity-40"
                    : "bg-[#6079FF] bg-opacity-40"
                }`}
                onClick={handleClick}
              >
                <div
                  className={`transform transition-transform ${
                    isToggled ? "translate-x-6" : "translate-x-0"
                  }`}
                >
                  <div
                    className={`flex w-9 h-9 p-[6px] justify-center items-center flex-shrink-0 rounded-[18px] border-2 border-solid border-white bg-[#28BD75]  ${
                      isToggled ? "bg-[#28BD75]" : "bg-[#6079FF]"
                    }`}
                  >
                    <img src={AdminLogo} alt="" className="w-6 h-6 " />
                  </div>
                </div>
              </button>
              <div className="flex">
                <p
                  className={`${
                    isToggled ? "text-[#28BD75]" : "text-[#6079FF]"
                  }  text-center text-base font-['Inter'] font-bold leading-normal`}
                >
                  {isToggled && <span>SUPER</span>} <span>ADMIN </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 pt-8 w-[272px] h-[251px]">
              <div className="flex flex-col gap-4 w-full items-end py-6">
                <div className="flex gap-4 w-[272px] h-[60px] items-center py-3 px-5 border-black/80 border-solid border-2 rounded-[30px]">
                  <img
                    src={UidLogo}
                    alt="Solaruseridlinear"
                    id="Solaruseridlinear"
                    className="w-9 h-9"
                  />
                  <input
                    value={mob}
                    onChange={(e) => setMob(e.target.value)}
                    type="text"
                    placeholder="ID / Mobile Number"
                    className="font-medium outline-none text-black/50 bg-transparent w-[180px] font-['Inter'] text-base  leading-normal"
                  />
                </div>
                <div className="flex  gap-4 w-[272px] h-[60px] items-center py-3 px-5 border-black/80 border-solid border-2 rounded-[30px]">
                  <img
                    src={PasswordLogo}
                    alt="Solarlocklinear"
                    id="Solarlocklinear"
                    className="w-8"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="font-medium text-black/50 bg-transparent w-[180px] font-['Inter'] text-base  leading-normal outline-none"
                  />
                </div>
              </div>
              <div
                onClick={handleProceed}
                // onClick={() => {
                //   isToggled
                //     ? navigate("/superadmin")
                //     : navigate("/newonboard");
                // }}
                className={`cursor-pointer items-center font-medium text-white flex py-3 px-5 gap-4 justify-center w-[104px] h-[43px] border-2 border-solid border-white rounded-[30px]  ${
                  isToggled ? "bg-[#28BD75]" : "bg-[#6079FF]"
                }`}
              >
                Proceed
              </div>
              {isToggled && (
                <p className="w-[90px] h-[19px] text-black font-['Inter'] font-normal  text-center ">
                  Need Help?
                </p>
              )}
            </div>
          </div>
          {/* side image */}
          <div className=" flex flex-1 justify-center items-center">
            <img
              src={logindesign}
              className={`${
                isToggled ? "scale-125" : "scale-100"
              } transition-transform ease-in-out duration-300`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SAdminLogin;
