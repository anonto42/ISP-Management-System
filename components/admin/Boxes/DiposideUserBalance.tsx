import React, { SetStateAction } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const DiposideUserBalance = ({
    setPosition
}:{
    setPosition: React.Dispatch<SetStateAction<boolean>>
}) => {


    const handelUpdate = async ()=>{
        try {

            setPosition(false)
            
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='z-10 absolute top-[50%] left-[50%] w-full h-full bg-[#0000002c] transform -translate-x-[50%] -translate-y-[50%] flex justify-center items-center'>
        <div className='w-[300px] sm:w-[500px] rounded-sm mx-auto bg-[#F7F7F7]'>
            <div className='text-lg sm:text-xl font-semibold p-3 border-b border-gray-300 flex items-center justify-between'>
                <h1>Diposide</h1>
                <IoIosCloseCircleOutline
                    onClick={()=>setPosition(false)}
                    className='text-2xl active:scale-95 cursor-pointer'
                />
            </div>
            <div className='px-3 py-3'>
                <input 
                    className='set_inp_ text-sm sm:text-lg'
                    type="text"
                    placeholder='Amount' />
                <input 
                    className='set_inp_ text-sm sm:text-lg mt-3'
                    type="text"
                    placeholder='Transaction' />
                <div
                    className='w-full flex justify-center pt-3'
                >
                    <button
                        onClick={()=>handelUpdate()}
                        className='px-3 py-2 bg-[green] font-semibold text-white shadow active:scale-95'
                    >Update</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiposideUserBalance