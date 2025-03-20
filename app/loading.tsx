import React from "react";

const Loading = () => {
  return (
    <div className="flex w-full h-svh items-center justify-center bg-gradient-to-r from-[#7e29ec] to-[#9b85cf] text-white">
      <div className="flex flex-col items-center space-y-6">
        {/* Circular Progress Loader */}
        <div className="relative flex items-center justify-center">
          <div className="w-32 h-32 border-8 border-t-transparent border-white rounded-full animate-spin"></div>
          <div className="absolute text-xl font-bold">Loading...</div>
        </div>
        
        {/* Animated text */}
        <div className="text-lg font-semibold animate-pulse">
          Please wait while we load your content.
        </div>
      </div>
    </div>
  );
};

export default Loading;
