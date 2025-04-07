"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import axios from 'axios';

const NaveBar = () => {
  const [profileBar,setProfileBare] = useState(true);
  
  return (
    <nav className='w-full h-[55px] bg-[#23232340] shadow absolute z-50'>
      <div className='w-full h-full flex justify-between items-center px-6'>
        <div></div>
        <div className='relative'>
          <div
            onClick={ ():void => setProfileBare( !profileBar )} 
            className='active:scale-95 ease-in-out cursor-pointer w-[36px] h-[36px] bg-amber-400 rounded-full'>
            <FaCircleUser className='text-4xl text-white' />
          </div>
          <ProfileOptionBar isOrNot={profileBar} />
        </div>
      </div>
    </nav>
  )
}

export default NaveBar


export function ProfileOptionBar({isOrNot}:{isOrNot:boolean}){

  const logOutHandailer = async () => {
    try {

      await axios.delete("/api/auth",{withCredentials:true});
      window.location.reload();
      
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <nav className={`absolute w-[120px] ${ isOrNot?"h-0":"h-[90px]"} bg-[#353535] z-20 right-0 top-14 text-center text-white overflow-clip ease-linear duration-100 shadow-sm shadow-[#0000005b] rounded-2xl`}>
      <Link href={"/admin"}>
        <h1 className='text-xl font-semibold py-2 active:bg-[#47474757]'>Home</h1>
      </Link>
      <div 
        onClick={()=>logOutHandailer()}
        className='flex justify-center items-center bg-[#df00002c] py-2.5 active:scale-105 duration-75 ease-linear cursor-pointer'>
        <span className='text-sm'>Logout</span>
        <IoLogOut className='text-[#f9ababfd] ml-2 text-2xl' />
        </div>
    </nav>
  )
}