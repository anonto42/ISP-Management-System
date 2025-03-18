"use client"
import React, { useState } from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaServer } from "react-icons/fa6";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { PiTarget } from "react-icons/pi";
import { MdOutlinePayments } from "react-icons/md";
import { PiPlugsConnectedLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

interface selection{
    index: number;
    innerIndex?: number;
}

const SideBar = () => {
    const [obg,setObg] = useState<selection>({index:1,innerIndex:1})
  return (
    <section className='h-svh w-[80px] md:w-[130px] bg-[#747dad] shadow-[0px_0px_10px_rgba(12,12,12,0.3)] absolute z-10'>
        <div className='w-full h-full'>
            <div 
                onClick={()=>{
                    setObg({index:1})
                }}
                className={
                    obg.index === 1? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
                }>
                <LuLayoutDashboard />
            </div>
            <div 
                onClick={()=>{
                    setObg({index:2})
                }}
                className={
                    obg.index === 2? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
                }>
                <FaServer />
            </div>
            <div 
                onClick={()=>{
                    setObg({index:3})
                }}
                className={
                    obg.index === 3? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
                }>
                <MdOutlineSupervisedUserCircle />
            </div>
            <div 
                onClick={()=>{
                    setObg({index:4})
                }}
                className={
                    obg.index === 4? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
                }>
                <TbCoinTaka />
            </div>
            <div 
                onClick={()=>{
                    setObg({index:5})
                }}
                className={
                    obg.index === 5? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
                }>
                <MdOutlineMessage />
            </div>
            <div 
                onClick={()=>{
                    setObg({index:6})
                }}
                className={
                    obg.index === 6? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
                }>
                <PiTarget />
            </div>
            <div 
                onClick={()=>{
                    setObg({index:7})
                }}
                className={
                    obg.index === 7? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
                }>
                <MdOutlinePayments />
            </div>
            <div 
                onClick={()=>{
                    setObg({index:8})
                }}
                className={
                    obg.index === 8? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
                }>
                <PiPlugsConnectedLight />
            </div>
            <div 
                onClick={()=>{
                    setObg({index:9})
                }}
                className={
                    obg.index === 9? 'icon-box bg-[#00000033] border-[#dadef5]':"icon-box"
                }>
                <IoSettingsOutline />
            </div>
        </div>
    </section>
  )
}

export default SideBar