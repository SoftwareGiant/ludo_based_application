import React from "react";

const SignUpSucess = () => {
  return (
    <>
      <div className="   md:bg-[#0F002B] md:min-w-[60%] lg:h-[100vh] md:h-[720px] flex flex-col md:float-left">
        <div className="flex flex-col ml-3 gap-20  items-start">
          <div className="relative flex flex-row justify-center w-full items-start">
            <div className="text-center text-6xl font-['Nunito_Sans'] font-bold text-white absolute top-0 left-0 h-20 w-[337px]">
              LUDO KING
            </div>
            <div className="text-center text-4xl text-white relative mt-16">
              punch line
            </div>
          </div>
          <div className="flex flex-col ml-20 gap-6 w-1/2 font-['Inter'] items-start">
            <div
              id="Ellipse"
              className="bg-[url(https://file.rendit.io/n/AgmUwxcDhU56xN8BuC7y.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center ml-3 pt-6 w-[150px] h-[150px] items-start"
            >
              <img
                src="https://file.rendit.io/n/pMEYBbJ6aVmtSmbzARlI.svg"
                alt="Mditick"
                id="Mditick"
                className="w-24"
              />
            </div>
            <div className="text-center text-5xl font-medium text-white">
              success
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 w-4/5 font-['Inter'] items-start">
          <img
            src="https://file.rendit.io/n/uOpyiNrJaYi3FMuL8ynB.png"
            alt="Ludoindianmonumenttouch1"
            className="mt-1 w-2"
          />
          <div className="text-center text-xs font-medium text-white">
            Terms of Service
          </div>
          <img
            src="https://file.rendit.io/n/s60Jn1cEsxdKdqY45O56.png"
            alt="Ludoindianmonumenttouch2"
            className="mt-1 w-2"
          />
          <div className="text-center text-xs font-medium text-white">
            Privacy Policy
          </div>
          <img
            src="https://file.rendit.io/n/FdikFsXQPzaRObzde4Ab.png"
            alt="Ludoindianmonumenttouch3"
            className="mt-1 w-2"
          />
          <div className="text-center text-xs font-medium text-white">
            Content Policies
          </div>
          <img
            src="https://file.rendit.io/n/DnVCzkrziny22ws1tw28.png"
            alt="Ludoindianmonumenttouch4"
            className="mt-1 w-2"
          />
        </div>
      </div>
    </>
  );
};

export default SignUpSucess;
