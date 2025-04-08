"use client"
import BandwidUsage from '@/components/graph/BandwidUsage'
import { Dispatch, SetStateAction, useState } from 'react';
import DiposideUserBalance from '@/components/admin/Boxes/DiposideUserBalance'
import Image from 'next/image';
import { User as usertype } from '@prisma/client';
import Loader from '@/components/loader/Loader';

const User = (
    {
        user,
        loading,
        setResresh
    }:{
        user: usertype,
        loading: boolean,
        setResresh:Dispatch<SetStateAction<number>>
    }
) => {
    const [graph,setGraph] = useState<boolean>(false); 
    const [deposite,setDeposite] = useState<boolean>(false); 
  return (
    <div>
        { loading && <Loader /> }
        { graph && <BandwidUsage setPosition={setGraph} user={user!} />}
        { deposite && <DiposideUserBalance setPosition={setDeposite} user={user!} setResresh={setResresh} /> }
        
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1600px] w-full mx-auto gap-4 overflow-y-auto'>

            <div className='shadow-md rounded-md overflow-clip'>
                <div className='w-full h-[150px] bg-[#1a926a] pt-3 text-center'>
                    <div className='w-[80px] h-[80px] bg-gray-600 rounded-full mx-auto relative overflow-clip'>
                        <Image 
                            src={user?.picture || ""}
                            alt='Profile'
                            fill
                            />
                    </div>
                    <h2 className='font-semibold text-white text-lg'>{user?.fullName}</h2>
                    <h4 className='text-white tracking-tighter'>{user?.id}</h4>
                </div>
                <div className='w-full bg-[#f7f7f7]'>
                    <div className='user_info_box'>
                        <h3 className='user_info_box_h3'>Username</h3>
                        <h2 className='user_info_box_h2'>{user?.userName}</h2>
                    </div>
                    <div className='user_info_box'>
                        <h3 className='user_info_box_h3'>Password</h3>
                        <h2 className='user_info_box_h2'>{user?.password}</h2>
                    </div>
                    <div className='user_info_box'>
                        <h3 className='user_info_box_h3'>Contact</h3>
                        <h2 className='user_info_box_h2'>{user?.phoneNumber}</h2>
                    </div>
                    <div className='w-full px-6 py-3 mt-[105px]'>
                        <button onClick={()=>setGraph(true)} className='user_info_box_btn'>Bandwidth Usage</button>
                    </div>
                </div>
            </div>

            <div className='shadow-md bg-[#f7f7f7] rounded-md overflow-clip'>
                <h3 className='font-semibold text-xl px-4 pt-4'>Details</h3>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Expirey Date</h3>
                    <div className='text-green-500 border px-3 py-2 text-sm rounded-full'>
                        {
                            user?.expireDate == undefined
                                ? "UNDEFINED"
                                : new Date(user.expireDate).toLocaleDateString('en-GB')
                        }
                    </div>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Package</h3>
                    <h2 className='user_info_box_h2'>{user?.interNetPackage} MBPS</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Type of connectivity</h3>
                    <h2 className='user_info_box_h2'>{user?.connectivityType}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Client Info</h3>
                    <h2 className='user_info_box_h2'>{user?.district+","+user?.upozala}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Wire Code</h3>
                    <h2 className='user_info_box_h2'>{user?.wireType}</h2>
                </div>
                <div className='w-full px-6 py-3 mt-25'>
                    <button onClick={()=>setDeposite(true)} className='user_info_box_btn'>Diposide</button>
                </div>
            </div>

            <div className='shadow-md bg-[#f7f7f7] rounded-md overflow-clip'>
                <h3 className='font-semibold text-xl p-4'>More</h3>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Branch</h3>
                    <h2 className='user_info_box_h2'>{user?.district}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Email</h3>
                    <h2 className='user_info_box_h2'>{user?.email}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Address</h3>
                    <h2 className='user_info_box_h2'>{user?.upozala}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Area</h3>
                    <h2 className='user_info_box_h2'>{user?.area}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>House No</h3>
                    <h2 className='user_info_box_h2'>{user?.houseNo}</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Floor</h3>
                    <h2 className='user_info_box_h2'>{user?.floorNo}rd</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Security Deposide</h3>
                    <h2 className='user_info_box_h2'>{user?.securityDeposit} Taka</h2>
                </div>
                <div className='user_info_box'>
                    <h3 className='user_info_box_h3'>Remark</h3>
                    <h2 className='user_info_box_h2'>{user?.referral? user.referral:"__|-|__"}</h2>
                </div>
            </div>

        </section>

    </div>
  )
}

export default User