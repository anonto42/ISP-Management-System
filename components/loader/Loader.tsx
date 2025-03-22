import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 bg-[#ffffff2f] flex justify-center items-center z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-white rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
