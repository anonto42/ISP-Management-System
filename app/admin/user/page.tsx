"use client"
import Image from 'next/image'
import React from 'react'
import profile from "@/public/test-profile.jpg"
import PaginationComponent from '@/components/paginate/Paginate'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react';
import BandwidUsage from '@/components/graph/BandwidUsage'
import DiposideUserBalance from '@/components/admin/Boxes/DiposideUserBalance'


interface invoice{
    id:string;
    fullName:string;
    invoiceNumber:string;
    transaction:string;
    statue:string;
    date:string;
    amount:string;
}

const invoices:invoice[] = [
    {
        id:"23",
        fullName:"user Name",
        invoiceNumber:"01990579274",
        transaction:"Bkash",
        statue:"Pament",
        date:"20-03-2025",
        amount:"2000 Taka"
    },
]

const page = () => {
    const [graph,setGraph] = useState<boolean>(false); 
    const [deposite,setDeposite] = useState<boolean>(false); 
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
  return (
    <div className='p-6 relative w-full h-svh'>

        { graph && <BandwidUsage setPosition={setGraph} /> }

        { deposite && <DiposideUserBalance setPosition={setDeposite} /> }

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1600px] w-full mx-auto gap-4 overflow-y-auto'>

            <div className='shadow-md rounded-md overflow-clip'>
                <div className='w-full h-[150px] bg-[#1a926a] pt-3 text-center'>
                    <div className='w-[80px] h-[80px] bg-gray-600 rounded-full mx-auto relative overflow-clip'>
                        <Image 
                            src={profile}
                            alt='Profile'
                            fill 

                            />
                    </div>
                    <h2 className='font-semibold text-white text-lg'>User Name</h2>
                    <h4 className='text-white tracking-tighter'>{id}</h4>
                </div>
                <div className='w-full bg-[#f7f7f7]'>
                    <div className='user_info_box'>
                        <h3 className='user_info_box_h3'>Username</h3>
                        <h2 className='user_info_box_h2'>9393</h2>
                    </div>
                    <div className='user_info_box'>
                        <h3 className='user_info_box_h3'>Password</h3>
                        <h2 className='user_info_box_h2'>lskdkk</h2>
                    </div>
                    <div className='user_info_box'>
                        <h3 className='user_info_box_h3'>Contact</h3>
                        <h2 className='user_info_box_h2'>0192299392382</h2>
                    </div>
                    <div className='w-full px-6 py-3 mt-[105px]'>
                        <button onClick={()=>setGraph(true)} className='user_info_box_btn'>Bandwidth Usage</button>
                    </div>
                </div>
            </div>

            <div className='shadow-md bg-[#f7f7f7] rounded-md overflow-clip'>
                <h3 className='font-semibold text-xl px-4 pt-4'>Details</h3>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Date</h3>
                    <div className='text-green-500 border px-3 py-2 text-sm rounded-full'>2025-03-25</div>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Package</h3>
                    <h2 className='user_info_box_h2'>{"2"} MBPS</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Connection Type</h3>
                    <h2 className='user_info_box_h2'>{"PPPoE"}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Type of connectivity</h3>
                    <h2 className='user_info_box_h2'>{"Shared"}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Client Info</h3>
                    <h2 className='user_info_box_h2'>{"2"} MBPS</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Wire Code</h3>
                    <h2 className='user_info_box_h2'>{"232"}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Connection Type</h3>
                    <h2 className='user_info_box_h2'>{"Fiber"}</h2>
                </div>
                <div className='w-full px-6 py-3'>
                    <button onClick={()=>setDeposite(true)} className='user_info_box_btn'>Diposide</button>
                </div>
            </div>

            <div className='shadow-md bg-[#f7f7f7] rounded-md overflow-clip'>
                <h3 className='font-semibold text-xl p-4'>More</h3>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Branch</h3>
                    <h2 className='user_info_box_h2'>{"Dhaka"}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Email</h3>
                    <h2 className='user_info_box_h2'>{"User@gmail.com"}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Address</h3>
                    <h2 className='user_info_box_h2'>{"Siddhirgonj"}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Area</h3>
                    <h2 className='user_info_box_h2'>{"Sultan mor"} MBPS</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>House No</h3>
                    <h2 className='user_info_box_h2'>{"Tharki,hillaw sex/32"}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Floor</h3>
                    <h2 className='user_info_box_h2'>{"2"}nd</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Security Deposide</h3>
                    <h2 className='user_info_box_h2'>{"1500"}/=</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Remark</h3>
                    <h2 className='user_info_box_h2'>{"Shadin"}</h2>
                </div>
            </div>

        </section>

        <section className='max-w-[1600px] mx-auto mt-4'>
            <PaginationComponent<invoice>
                action={{delete:true}}
                addUserButton={false}
                fields={["ID","Full Name","Number","Transaction","Status","Date","Amount"]}
                allData={invoices}
                paginateTitle='Invoices'
            />
        </section>

    </div>
  )
}

export default page