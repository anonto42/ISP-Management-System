import Image from 'next/image'
import React from 'react'
import image from "@/public/test-profile.jpg"
import logo from "@/app/icon.png";
import { RiDashboardLine } from "react-icons/ri";
import { FaCcAmazonPay } from "react-icons/fa";
import { PiMicrosoftPowerpointLogoDuotone } from "react-icons/pi";
import { MdContactMail } from "react-icons/md";
import Link from 'next/link';

const Naveber = () => {
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
            <div className='w-[50px] h-[50px] rounded-full overflow-clip relative'>
                <Image 
                    src={image}
                    alt='Logo'
                    fill
                />
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