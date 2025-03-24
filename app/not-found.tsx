import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-gradient-to-r from-[#8030EA] to-[#9B84D0]">
      <div className="text-center p-8 bg-white bg-opacity-90 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8030EA] to-[#9B84D0]">
          404
        </h1>
        <p className="text-2xl text-gray-800 mt-4">Oops! Page not found.</p>
        <p className="text-gray-600 mt-2">We couldn&apos;t find the page you were looking for.</p>
        <Link href="/">
          <div className="mt-6 inline-block px-6 py-3 text-white bg-gradient-to-r from-[#8030EA] to-[#9B84D0] rounded-lg hover:from-[#9B84D0] hover:to-[#8030EA] transition duration-300">
            Go back to Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
