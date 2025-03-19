"use client"
import React, { SetStateAction, useState } from 'react';
import { selection } from '../SideBar';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';
import { IconType } from 'react-icons';

interface InputFromMainPage{
    Icon: IconType;
    setElementState: React.Dispatch<SetStateAction<selection>>;
    Title: string;
    state: selection;
    index: number;
    DropeDowne: boolean;
    SecondarySections: string[];
}

const SideBareIconBox = (data:InputFromMainPage) => {
    const [bar,setBar] = useState(true);
    const secondaryBarHeight = data.SecondarySections.length*45;
    const mobileViewSecondaryBarHeight = data.SecondarySections.length*44;
  return (
    <div 
    className={
        data.state.index === data.index? 'icon-box border-b-2 bg-[#00000033] border-[#dadef5]':"icon-box"
    }>
        <div className='w-full h-full flex justify-between pl-4'
           onClick={()=>{
                data.setElementState({index:data.index,innerIndex:undefined});
                setBar(true)
            }}
        >
            <div className='flex items-center'>
                <data.Icon />
                <h4 className='text-xl ml-2 hidden lg:block'>{data.Title}</h4>
            </div>
            {
                data.DropeDowne? data.state.index === data.index? (<GoChevronDown className='mt-[0.5px]'/>):(<GoChevronRight />) : <></>
            }
        </div>
        {/* Secondary bar inner bar height h-[60px] */}
        <div
            className={`w-full hidden lg:block ease-in-out duration-200 ${
                data.state.index !== data.index ? "h-0 p-0" : ""
            } overflow-clip text-lg bg-[#12061915] rounded-lg`}
            style={{
                height: data.state.index === data.index ? `${secondaryBarHeight}px` : '0',
                marginTop: data.SecondarySections.length > 0 && data.state.index === data.index ? "8px":"0",
                paddingBottom: data.SecondarySections.length > 0 && data.state.index === data.index ? "16px":"0"
            }}
            >
            {data.SecondarySections.map((item, index) => (
                <h4
                key={index}
                onClick={() => data.setElementState({ index: data.index, innerIndex: index ,name:item})}
                className={`pl-14 border-b py-2 duration-75 ease-linear active:bg-[#327ab965] ${data.state.innerIndex === index? "bg-[#006cf84f]":"bg-transparent"}`}
                >
                {item}
                </h4>
            ))}
        </div>
        {/* BarFor mobile view */}
        {
            bar?(
                <div 
                    className={`absolute lg:hidden ease-in-out duration-300 w-[150px] ${data.state.index !== data.index? "h-0":""} bg-[#40d4b43a] top-12 left-21 shadow shadow-[#0000006c] rounded-sm overflow-clip`}
                    style={{
                        height: data.state.index === data.index ? `${mobileViewSecondaryBarHeight}px` : '0',
                    }}
                    >
                    {
                        data.SecondarySections.map((item,index)=>{
                            return <h4 
                                key={index}
                                onClick={()=>{
                                    data.setElementState({index:data.index,innerIndex:index, name:item});
                                    setTimeout(()=>{
                                        setBar(false)
                                    },2000)
                                }}
                                className={`text-lg text-center py-2 border-b duration-75 ease-linear active:bg-[#0000004b] ${ data.state.innerIndex === index?"bg-[#2f4a8fcb]":"bg-transparent" }`}
                                >{item}</h4>
                        })
                    }
                </div>
            ):(<></>)
        }
    </div>
  )
}

export default SideBareIconBox