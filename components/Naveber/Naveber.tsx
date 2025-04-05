"use client"
import Image from 'next/image'
import React from 'react'
import logo from "@/app/icon.png";
import { RiDashboardLine } from "react-icons/ri";
import { FaCcAmazonPay } from "react-icons/fa";
import { PiMicrosoftPowerpointLogoDuotone } from "react-icons/pi";
import { MdContactMail } from "react-icons/md";
import Link from 'next/link';
import { IoLogOut } from 'react-icons/io5';
import axios from 'axios';

const Naveber = () => {

    const logOutHandailer = async () => {
        try {
    
            await axios.delete("/api/auth",{withCredentials:true});
          window.location.reload();
          
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className='w- h-[120px]'>
        <nav className='w-full flex px-3 justify-between border-b border-gray-300 py-4'>
            <div className='relative w-[70px]'>
                <Image 
                    src={logo}
                    alt='Logo'
                    fill
                />
            </div>
            <div className='w-[50px] h-[50px] flex justify-center items-center'>
                <IoLogOut 
                    onClick={()=>logOutHandailer()}
                    className='text-4xl active:scale-95 ease-in-out duration-100 text-white' />
            </div>
        </nav>
        <nav className='flex'>
            <Link href={"/user"} >
                <div className='userNaveItems'>
                    <RiDashboardLine/>
                    <h4>Dashboard</h4>
                </div>
            </Link>
            <Link href={"/user/pay"}>
                <div className='userNaveItems'>
                    <FaCcAmazonPay/>
                    <h4>Pay</h4>
                </div>
            </Link>
            <Link href={"/user/ftp"}>
                <div className='userNaveItems'>
                    <PiMicrosoftPowerpointLogoDuotone/>
                    <h4>FTP</h4>
                </div>
            </Link>
            <Link href={"/user/contact"}>
                <div className='userNaveItems'>
                    <MdContactMail/>
                    <h4>Contact</h4>
                </div>
            </Link>
        </nav>
    </div>
  )
}

export default Naveber