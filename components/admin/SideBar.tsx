"use client"
import React, { useState } from 'react';
import { LuBookText, LuLayoutDashboard } from "react-icons/lu";
import { FaServer } from "react-icons/fa6";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { PiTarget } from "react-icons/pi";
import { MdOutlinePayments } from "react-icons/md";
import { PiPlugsConnectedLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { IconType } from 'react-icons';
import SideBareIconBox from './Boxes/SideBareIconBox';

export interface selection{
    index: number;
    innerIndex?: number;
    name?: string;
}

interface oneBox{
    Icon: IconType;
    Title: string;
    subSections: string[];
}

const barAndShowInfo: oneBox[] = [
    {
        Icon: LuLayoutDashboard,
        Title: "Deshboard",
        subSections:[]
    },
    {
        Icon: FaServer,
        Title: "Server",
        subSections:["Live","PPPoE Secrect"]
    },
    {
        Icon: MdOutlineSupervisedUserCircle,
        Title: "Customers",
        subSections:["All","Add new"]
    },
    {
        Icon: TbCoinTaka,
        Title: "Billing",
        subSections:[]
    },
    {
        Icon: MdOutlineMessage,
        Title: "Message",
        subSections:["All","Individual"]
    },
    {
        Icon: PiTarget,
        Title: "Income",
        subSections:["Income","Expense","Stuff"]
    },
    {
        Icon: MdOutlinePayments,
        Title: "Payment",
        subSections:["Bkash","Nagod","Rocket","Upay","Credit Card"]
    },
    {
        Icon: PiPlugsConnectedLight,
        Title: "Resellers",
        subSections:["Add New","View","Top-Up"]
    },
    {
        Icon: IoSettingsOutline,
        Title: "Settings",
        subSections:["Config","User Portal"]
    },
    {
        Icon: LuBookText,
        Title: "BTRC Report",
        subSections:[]
    },
];

const SideBar = () => {
    const [section,setSection] = useState<selection>({index:0,innerIndex:0})
  return (
    <section className='h-svh w-[80px] lg:w-[210px] bg-[#747dad] shadow-[0px_0px_10px_rgba(12,12,12,0.3)] absolute z-10 font-semibold'>
        <div className='w-full h-full'>
            {
                barAndShowInfo.map((element,index)=>{
                    return (
                        <SideBareIconBox 
                            key={index}
                            Icon={element.Icon}
                            Title={element.Title}
                            index={index}
                            SecondarySections={element.subSections}
                            setElementState={setSection}
                            state={section}
                            DropeDowne={ element.subSections.length > 0 }
                        />
                    )
                })
            }
        </div>
    </section>
  )
}

export default SideBar