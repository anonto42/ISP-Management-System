import React from 'react';
import { DNA } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 bg-[#ffffff4b] flex justify-center items-center z-50">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        />
    </div>
  );
};

export default Loader;
