"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

const NaveBar = () => {
  const [profileBar,setProfileBare] = useState(true);
  
  return (
    <nav className='w-full h-[55px] bg-[#23232340] shadow absolute'>
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

  const logOutHandailer = ():void => {};

  return(
    <nav className={`absolute w-[120px] ${ isOrNot?"h-0":"h-[130px]"} bg-[#8598c48c] right-0 top-14 text-center text-white overflow-clip ease-linear duration-100 shadow-sm shadow-[#0000005b] rounded-2xl`}>
      <Link href={"/profile"}>
        <h1 className='text-xl font-semibold py-2 active:bg-[#47474757]'>Profile</h1>
      </Link>
      <Link href={"/profile/log"}>
        <h3 className='text-lg font-medium pb-2 border-y pt-1 active:bg-[#47474757]'>log</h3>
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