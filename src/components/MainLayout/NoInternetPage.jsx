import React from "react";
import LudoMainLogo from "./LudoMainLogo";
const NoInternetPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">No Internet Connection</h1>
        <p className="text-lg mb-8">
          Please check your network settings and try again.
        </p>
        <svg
          className="w-16 h-16 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 9.75l4.5 4.5M14.25 9.75l-4.5 4.5m10.686 2.54A9.969 9.969 0 0121 12a9.969 9.969 0 01-1.614 5.79M3.514 3.514A9.969 9.969 0 003 12c0 2.69 1.057 5.126 2.786 6.886m10.165 1.242A9.935 9.935 0 0012 21a9.935 9.935 0 01-5.79-1.614M9 12c0-1.658.67-3.156 1.758-4.242m2.484 0A5.985 5.985 0 0115 12m6.364-6.364A9.969 9.969 0 0021 12a9.969 9.969 0 00-1.614-5.79M3.514 3.514A9.969 9.969 0 003 12c0 2.69 1.057 5.126 2.786 6.886m0 0A9.935 9.935 0 0112 21a9.935 9.935 0 015.79-1.614m0 0A9.969 9.969 0 0021 12a9.969 9.969 0 00-1.614-5.79m0 0A9.935 9.935 0 0112 3c-2.69 0-5.126 1.057-6.886 2.786m0 0A9.969 9.969 0 003 12c0 2.69 1.057 5.126 2.786 6.886m0 0A9.935 9.935 0 0112 21a9.935 9.935 0 015.79-1.614m0 0A9.969 9.969 0 0021 12a9.969 9.969 0 00-1.614-5.79m0 0A9.935 9.935 0 0112 3c-2.69 0-5.126 1.057-6.886 2.786"
          ></path>
        </svg>
        <LudoMainLogo light={true} />
      </div>
    </div>
  );
};

export default NoInternetPage;
