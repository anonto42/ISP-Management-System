import React from 'react';
import os from "os";

interface serverInfo{
    title: string;
    data: number | string | Date;
}

const serverInformation: serverInfo[] = [
    {
        title:"Version",
        data: 0.1
    },
    {
        title:"Uptime",
        data: os.uptime()
    },
    {
        title:"Total Memory",
        data: (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + " GB"
    },
    {
        title:"Free Memory",
        data: (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + " GB"
    },
    {
        title:"CPU",
        data: os.loadavg()[0].toFixed(2) + " %"
    },
    {
        title:"Board-name",
        data: os.hostname()
    },
]


const SystemInfo = () => {

  return (
    <div className='w-auto h-[460px] bg-[#efecec] p-4 text-black shadow-md'>
        <h1 className='font-semibold text-xl'>Server</h1>
        <div className='w-full mt-5'>
            {
                serverInformation.map((item,index)=><ServerInfoCompo title={item.title} data={item.data} key={index} />)
            }
        </div>
    </div>
  )
}

export default SystemInfo

export function ServerInfoCompo({title,data}:serverInfo){
    return <div className='w-full py-5 border-b border-[#d1d1d1b9] px-4 flex justify-between items-center'>
        <h3>{title}</h3>
        <h3>{data.toString()}</h3>
    </div>
}