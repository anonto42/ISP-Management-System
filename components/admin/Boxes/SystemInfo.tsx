import React from 'react'

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
        data: Date.now()
    },
    {
        title:"Free Memory",
        data: "0.00023002 GB"
    },
    {
        title:"CPU",
        data: "50%"
    },
    {
        title:"Board-name",
        data: "Server_pc"
    },
]


const SystemInfo = () => {
  return (
    <div className='w-auto h-[400px] bg-[#efecec] p-4 text-black shadow-md'>
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