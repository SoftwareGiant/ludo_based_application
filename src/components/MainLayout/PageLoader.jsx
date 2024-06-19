import React from 'react';

function PageLoader({full}) {
  return (
    <div className={`flex space-x-2 w-full justify-center items-center  bg-white h-screen dark:invert`}>
      <span className='sr-only'>Loading...</span>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce' style={{ animationDelay: '-0.3s' }}></div>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce' style={{ animationDelay: '-0.15s' }}></div>
      <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
    </div>
  );
}

export default PageLoader;
