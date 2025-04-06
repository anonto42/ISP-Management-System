"use client"
import React, { useState } from 'react';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaServer, FaUsersGear } from "react-icons/fa6";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { PiTarget } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import Link from 'next/link';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';

interface selection{
    index: number;
    innerIndex?: number;
    name?: string;
}


const SideBar = () => {
    const [section,setSection] = useState<selection>({index:0,innerIndex:0});
    const [bar,setBar] = useState(true);

  return (
    <section className='h-svh w-[80px] lg:w-[210px] bg-[#747dad] shadow-[0px_0px_10px_rgba(12,12,12,0.3)] absolute z-10 font-semibold'>
        <div className='w-full h-full'>
        
            {/* Deshboard */}
            <div 
                key={"Deshboard"}
                className={
                section.index === 0? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
            }>
                <Link href={"/admin"}>
                    <div className='lg:mr-6'
                        onClick={()=>{
                        setSection({index:0,innerIndex:0});
                    setBar(true)
                    }}
                    >
                        <div className='flex items-center'>
                            <LuLayoutDashboard />
                            <h4 className='text-xl ml-2 hidden lg:block'>{"Deshboard"}</h4>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Server */}
            <div 
                key={"Server"}
                className={
                section.index === 1? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
            }>
                <div className='w-full h-full flex justify-between pl-4'
                    onClick={()=>{
                    setSection({index:1,innerIndex:undefined});
                    setBar(true)
                }}
                >
                    <div className='flex items-center'>
                        <FaServer />
                        <h4 className='text-xl ml-2 hidden lg:block'>{"Server"}</h4>
                    </div>
                    {
                        section.index === 1? (<GoChevronDown className='mt-[0.5px]'/>):(<GoChevronRight />)
                    }
                </div>
                <div
                    className={`w-full hidden lg:block ease-in-out duration-200 ${
                        section.index !== 1 ? "h-0 p-0" : ""
                    } overflow-clip text-lg bg-[#12061915] rounded-lg`}
                    style={{
                        height: section.index === 1 ? `90px` : '0',
                        marginTop: section.index === 1? "8px":"0",
                        paddingBottom: section.index ===1? "16px":"0"
                    }}
                    >
                        {["Live","PPPoE Secrect"].map((item, index) => (
                            <Link key={index} href={`/admin/server/${item.toLocaleLowerCase().split(" ").join("")}`}> 
                                <h4
                                    
                                    onClick={() => setSection({ index: 1, innerIndex: index ,name:item})}
                                    className={`pl-14 border-b py-2 duration-75 ease-linear active:bg-[#327ab965] ${section.innerIndex === index? "bg-[#006cf84f]":"bg-transparent"}`}
                                    >
                                    {item}
                                </h4>
                            </Link>
                        ))}
                </div>
                {
                    bar?(
                        <div 
                            className={`absolute lg:hidden ease-in-out duration-300 w-[150px] ${section.index !== 1? "h-0":""} bg-[#968bfc] top-12 left-21 shadow shadow-[#0000006c] rounded-sm overflow-clip`}
                            style={{
                                height: section.index === 1 ? `90px` : '0',
                            }}
                            >
                            {
                                ["Live","PPPoE Secrect"].map((item,index)=>{
                                    return <Link key={index} href={`/admin/server/${item.toLocaleLowerCase().split(" ").join("")}`}>
                                        <h4 
                                           
                                            onClick={()=>{
                                                setSection({index:1,innerIndex:index, name:item});
                                                setTimeout(()=>{
                                                    setBar(false)
                                                },200)
                                            }}
                                                className={`text-lg text-center py-2 border-b duration-75 ease-linear active:bg-[#0000004b] ${section.innerIndex === index?"bg-[#2f4a8fcb]":"bg-transparent" }`}
                                            >{item}</h4>
                                    </Link>
                                })
                            }
                        </div>
                    ):(<></>)
                }
            </div>

            {/* Customers */}
            <div 
                key={"Customers"}
                className={
                section.index === 2? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
            }>
                <div className='w-full h-full flex justify-between pl-4'
                    onClick={()=>{
                    setSection({index:2,innerIndex:undefined});
                    setBar(true)
                }}
                >
                    <div className='flex items-center'>
                        <MdOutlineSupervisedUserCircle />
                        <h4 className='text-xl ml-2 hidden lg:block'>Customers</h4>
                    </div>
                    {
                        section.index === 2? (<GoChevronDown className='mt-[0.5px]'/>):(<GoChevronRight />)
                    }
                </div>
                <div
                    className={`w-full hidden lg:block ease-in-out duration-200 ${
                        section.index !== 2 ? "h-0 p-0" : ""
                    } overflow-clip text-lg bg-[#12061915] rounded-lg`}
                    style={{
                        height: section.index === 2? `90px` : '0',
                        marginTop: section.index === 2? "8px":"0",
                        paddingBottom: section.index === 2? "16px":"0"
                    }}
                    >
                        {["All","Add new"].map((item, index) => (
                            <Link key={index} href={`/admin/customers/${item.toLocaleLowerCase().split(" ").join("")}`}> 
                                <h4
                                    onClick={() => setSection({ index: 2, innerIndex: index ,name:item})}
                                    className={`pl-14 border-b py-2 duration-75 ease-linear active:bg-[#327ab965] ${section.innerIndex === index? "bg-[#006cf84f]":"bg-transparent"}`}
                                    >
                                    {item}
                                </h4>
                            </Link>
                        ))}
                </div>
                {
                    bar?(
                        <div 
                            className={`absolute lg:hidden ease-in-out duration-300 w-[150px] ${section.index !== 2? "h-0":""} bg-[#968bfc] top-12 left-21 shadow shadow-[#0000006c] rounded-sm overflow-clip`}
                            style={{
                                height: section.index === 2 ? `90px` : '0',
                            }}
                            >
                            {
                                ["All","Add new"].map((item,index)=>{
                                    return <Link key={index} href={`/admin/customers/${item.toLocaleLowerCase().split(" ").join("")}`}>
                                        <h4 
                                            onClick={()=>{
                                                setSection({index:2,innerIndex:index, name:item});
                                                setTimeout(()=>{
                                                    setBar(false)
                                                },200)
                                            }}
                                                className={`text-lg text-center py-2 border-b duration-75 ease-linear active:bg-[#0000004b] ${section.innerIndex === index?"bg-[#2f4a8fcb]":"bg-transparent" }`}
                                            >{item}</h4>
                                    </Link>
                                })
                            }
                        </div>
                    ):(<></>)
                }
            </div>

            {/* Billing */}
            <div 
                key={"Billing"}
                className={
                section.index === 3? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
            }>
                <Link href={"/admin/billing"}>
                    <div className='lg:mr-14'
                        onClick={()=>{
                        setSection({index:3,innerIndex:0});
                        setBar(true)
                    }}
                    >
                        <div className='flex'>
                            <TbCoinTaka />
                            <h4 className='text-xl ml-2 hidden lg:block'>Billing</h4>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Message */}
            <div 
                key={"Message"}
                className={
                section.index === 4? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
            }>
                <div className='w-full h-full flex justify-between pl-4'
                    onClick={()=>{
                    setSection({index:4,innerIndex:undefined});
                    setBar(true)
                }}
                >
                    <div className='flex items-center'>
                        <MdOutlineMessage />
                        <h4 className='text-xl ml-2 hidden lg:block'>Message</h4>
                    </div>
                    {
                        section.index === 4? (<GoChevronDown className='mt-[0.5px]'/>):(<GoChevronRight />)
                    }
                </div>
                <div
                    className={`w-full hidden lg:block ease-in-out duration-200 ${
                        section.index !== 4 ? "h-0 p-0" : ""
                    } overflow-clip text-lg bg-[#12061915] rounded-lg`}
                    style={{
                        height: section.index === 4? `90px` : '0',
                        marginTop: section.index === 4? "8px":"0",
                        paddingBottom: section.index === 4? "16px":"0"
                    }}
                    >
                        {["All","individual"].map((item, index) => (
                            <Link key={index} href={`/admin/message/${item.toLocaleLowerCase().split(" ").join("")}`}> 
                                <h4
                                   
                                    onClick={() => setSection({ index: 4, innerIndex: index ,name:item})}
                                    className={`pl-14 border-b py-2 duration-75 ease-linear active:bg-[#327ab965] ${section.innerIndex === index? "bg-[#006cf84f]":"bg-transparent"}`}
                                    >
                                    {item}
                                </h4>
                            </Link>
                        ))}
                </div>
                {
                    bar?(
                        <div 
                            className={`absolute lg:hidden ease-in-out duration-300 w-[150px] ${section.index !== 4? "h-0":""} bg-[#968bfc] top-12 left-21 shadow shadow-[#0000006c] rounded-sm overflow-clip`}
                            style={{
                                height: section.index === 4 ? `90px` : '0',
                            }}
                            >
                            {
                                ["All","Individual"].map((item,index)=>{
                                    return <Link key={index} href={`/admin/message/${item.toLocaleLowerCase().split(" ").join("")}`}>
                                        <h4 
                                           
                                            onClick={()=>{
                                                setSection({index:4,innerIndex:index, name:item});
                                                setTimeout(()=>{
                                                    setBar(false)
                                                },200)
                                            }}
                                                className={`text-lg text-center py-2 border-b duration-75 ease-linear active:bg-[#0000004b] ${section.innerIndex === index?"bg-[#2f4a8fcb]":"bg-transparent" }`}
                                            >{item}</h4>
                                    </Link>
                                })
                            }
                        </div>
                    ):(<></>)
                }
            </div>

            {/* Income */}
            <div
                key={"Income"} 
                className={
                section.index === 5? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
            }>
                <div className='w-full h-full flex justify-between pl-4'
                    onClick={()=>{
                    setSection({index:5,innerIndex:undefined});
                    setBar(true)
                }}
                >
                    <div className='flex items-center'>
                        <PiTarget />
                        <h4 className='text-xl ml-2 hidden lg:block'>Income</h4>
                    </div>
                    {
                        section.index === 5? (<GoChevronDown className='mt-[0.5px]'/>):(<GoChevronRight />)
                    }
                </div>
                <div
                    className={`w-full hidden lg:block ease-in-out duration-200 ${
                        section.index !== 5 ? "h-0 p-0" : ""
                    } overflow-clip text-lg bg-[#12061915] rounded-lg`}
                    style={{
                        height: section.index === 5? `95px` : '0',
                        marginTop: section.index === 5? "8px":"0",
                        paddingBottom: section.index === 5? "16px":"0"
                    }}
                    >
                        {["Income","Expense"].map((item, index) => (
                            <Link key={index} href={`/admin/income/${item.toLocaleLowerCase().split(" ").join("")}`}> 
                                <h4
                                   
                                    onClick={() => setSection({ index: 5, innerIndex: index ,name:item})}
                                    className={`pl-14 border-b py-2 duration-75 ease-linear active:bg-[#327ab965] ${section.innerIndex === index? "bg-[#006cf84f]":"bg-transparent"}`}
                                    >
                                    {item}
                                </h4>
                            </Link>
                        ))}
                </div>
                {
                    bar?(
                        <div 
                            className={`absolute lg:hidden ease-in-out duration-300 w-[150px] ${section.index !== 5? "h-0":""} bg-[#968bfc] top-12 left-21 shadow shadow-[#0000006c] rounded-sm overflow-clip`}
                            style={{
                                height: section.index === 5 ? `90px` : '0',
                            }}
                            >
                            {
                                ["Income","Expense"].map((item,index)=>{
                                    return <Link  key={index} href={`/admin/income/${item.toLocaleLowerCase().split(" ").join("")}`}>
                                        <h4 
                                          
                                            onClick={()=>{
                                                setSection({index:5,innerIndex:index, name:item});
                                                setTimeout(()=>{
                                                    setBar(false)
                                                },200)
                                            }}
                                                className={`text-lg text-center py-2 border-b duration-75 ease-linear active:bg-[#0000004b] ${section.innerIndex === index?"bg-[#2f4a8fcb]":"bg-transparent" }`}
                                            >{item}</h4>
                                    </Link>
                                })
                            }
                        </div>
                    ):(<></>)
                }
            </div>

            {/* Resellers */}
            <div 
                key={"Resellers"}
                className={
                section.index === 7? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
            }>
                <div className='w-full h-full flex justify-between pl-4'
                    onClick={()=>{
                    setSection({index:7,innerIndex:undefined});
                    setBar(true)
                }}
                >
                    <div className='flex items-center'>
                        <FaUsersGear />
                        <h4 className='text-xl ml-2 hidden lg:block'>Resellers</h4>
                    </div>
                    {
                        section.index === 7? (<GoChevronDown className='mt-[0.5px]'/>):(<GoChevronRight />)
                    }
                </div>
                <div
                    className={`w-full hidden lg:block ease-in-out duration-200 ${
                        section.index !== 7 ? "h-0 p-0" : ""
                    } overflow-clip text-lg bg-[#12061915] rounded-lg`}
                    style={{
                        height: section.index === 7? `135px` : '0',
                        marginTop: section.index === 7? "8px":"0",
                        paddingBottom: section.index === 7? "16px":"0"
                    }}
                    >
                        {["Add New","View","Top-Up"].map((item, index) => (
                            <Link key={index} href={`/admin/resellers/${item.toLocaleLowerCase().split(" ").join("")}`}> 
                                <h4
                                   
                                    onClick={() => setSection({ index: 7, innerIndex: index ,name:item})}
                                    className={`pl-14 border-b py-2 duration-75 ease-linear active:bg-[#327ab965] ${section.innerIndex === index? "bg-[#006cf84f]":"bg-transparent"}`}
                                    >
                                    {item}
                                </h4>
                            </Link>
                        ))}
                </div>
                {
                    bar?(
                        <div 
                            className={`absolute lg:hidden ease-in-out duration-300 w-[150px] ${section.index !== 7? "h-0":""} bg-[#968bfc] top-12 left-21 shadow shadow-[#0000006c] rounded-sm overflow-clip`}
                            style={{
                                height: section.index === 7 ? `135px` : '0',
                            }}
                            >
                            {
                                ["Add New","View","Top-Up"].map((item,index)=>{
                                    return <Link key={index} href={`/admin/resellers/${item.toLocaleLowerCase().split(" ").join("")}`}>
                                        <h4 
                                           
                                            onClick={()=>{
                                                setSection({index:7,innerIndex:index, name:item});
                                                setTimeout(()=>{
                                                    setBar(false)
                                                },200)
                                            }}
                                                className={`text-lg text-center py-2 border-b duration-75 ease-linear active:bg-[#0000004b] ${section.innerIndex === index?"bg-[#2f4a8fcb]":"bg-transparent" }`}
                                            >{item}</h4>
                                    </Link>
                                })
                            }
                        </div>
                    ):(<></>)
                }
            </div>

            {/* Settings */}
            <div 
                key={"Settings"}
                className={
                section.index === 8? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
            }>
                <div className='w-full h-full flex justify-between pl-4'
                    onClick={()=>{
                    setSection({index:8,innerIndex:undefined});
                    setBar(true)
                }}
                >
                    <div className='flex items-center'>
                        <IoSettingsOutline />
                        <h4 className='text-xl ml-2 hidden lg:block'>Settings</h4>
                    </div>
                    {
                        section.index === 8? (<GoChevronDown className='mt-[0.5px]'/>):(<GoChevronRight />)
                    }
                </div>
                <div
                    className={`w-full hidden lg:block ease-in-out duration-200 ${
                        section.index !== 8 ? "h-0 p-0" : ""
                    } overflow-clip text-lg bg-[#12061915] rounded-lg`}
                    style={{
                        height: section.index === 8? `90px` : '0',
                        marginTop: section.index === 8? "8px":"0",
                        paddingBottom: section.index === 8? "16px":"0"
                    }}
                    >
                        {["Config","User Portal"].map((item, index) => (
                            <Link key={index} href={`/admin/settings/${item.toLocaleLowerCase().split(" ").join("")}`}> 
                                <h4
                                   
                                    onClick={() => setSection({ index: 8, innerIndex: index ,name:item})}
                                    className={`pl-14 border-b py-2 duration-75 ease-linear active:bg-[#327ab965] ${section.innerIndex === index? "bg-[#006cf84f]":"bg-transparent"}`}
                                    >
                                    {item}
                                </h4>
                            </Link>
                        ))}
                </div>
                {
                    bar?(
                        <div 
                            className={`absolute lg:hidden ease-in-out duration-300 w-[150px] ${section.index !== 8? "h-0":""} bg-[#968bfc] top-12 left-21 shadow shadow-[#0000006c] rounded-sm overflow-clip`}
                            style={{
                                height: section.index === 8 ? `90px` : '0',
                            }}
                            >
                            {
                                ["Config","User Portal"].map((item,index)=>{
                                    return <Link key={index} href={`/admin/settings/${item.toLocaleLowerCase().split(" ").join("")}`}>
                                        <h4 
                                           
                                            onClick={()=>{
                                                setSection({index:8,innerIndex:index, name:item});
                                                setTimeout(()=>{
                                                    setBar(false)
                                                },200)
                                            }}
                                                className={`text-lg text-center py-2 border-b duration-75 ease-linear active:bg-[#0000004b] ${section.innerIndex === index?"bg-[#2f4a8fcb]":"bg-transparent" }`}
                                            >{item}</h4>
                                    </Link>
                                })
                            }
                        </div>
                    ):(<></>)
                }
            </div>
            
        </div>
    </section>
  )
}

export default SideBar