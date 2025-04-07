"use client"
import { User } from '@prisma/client'
import React, { SetStateAction } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const BandwidUsage = ({
    setPosition,
    user
}:{
    setPosition: React.Dispatch<SetStateAction<boolean>>,
    user: User
}) => {
  return (
    <div className='z-10 absolute top-[50%] left-[50%] w-full h-full bg-[#0000002c] transform -translate-x-[50%] -translate-y-[50%] flex justify-center items-center'>
            <div className='w-[35vh] h-[60vh] sm:w-[60vh] rounded-sm mx-auto bg-[#F7F7F7]'>
                <div className='text-lg sm:text-xl font-semibold p-3 border-b border-gray-300 flex items-center justify-between'>
                    <h1>Bandwidth uses</h1>
                    <IoIosCloseCircleOutline
                        onClick={()=>setPosition(false)}
                        className='text-2xl sm:text-3xl active:scale-95 cursor-pointer'
                    />
                </div>
                {/*  */}

                <div>
                    This will be a chat that show the live user bandwid uges
                </div>
            </div>
        </div>
  )
}

export default BandwidUsage