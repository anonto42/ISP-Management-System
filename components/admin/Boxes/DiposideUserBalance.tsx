"use client"
import Loader from '@/components/loader/Loader';
import { User } from '@prisma/client';
import axios, { AxiosError } from 'axios';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { toast } from 'react-toastify';

const DiposideUserBalance = ({
    setPosition,
    user,
    setResresh
}:{
    setPosition: React.Dispatch<SetStateAction<boolean>>,
    user: User,
    setResresh: Dispatch<SetStateAction<number>>
}) => {
    const [loading,setLoading]=useState<boolean>(false);
    const [amout,setAmount] = useState<string>("");
    const [trang,setTrang] = useState<string>("");
    const [count,setcount] = useState<number>(0);
    const [invoiceType] = useState<string>("income")

    const handerUpload = async () => {
        if (invoiceType === "income") {
          try {
            setLoading(true);
      
            const income_data = {
              amount:Number(amout), 
              type:"income", 
              purpes:trang, 
              date: new Date(),
              userName:user.userName,
              receved:"Hand Cash"
            }
      
            const { data } = await axios.post("/api/transection",income_data);
            
            setLoading(false);
      
            toast.success(data.message);

            setResresh( prevCount => {
                const newCount = prevCount + 2;
                setResresh(newCount + 1); // Update based on new count value
                return newCount;
              });

            setPosition(false);
      
          } catch (error) {
            console.log(error);
            if (error instanceof AxiosError) {
                toast.error(`${error.response?.data?.message}`);
                console.log(error.response);
            } else {
                console.error("An unknown error occurred:", error);
            }
            setLoading(false);
          }
        }else{
        //   try {
        //     setLoading(true);
      
        //     const income_data = {
        //       amount:Number(amout), 
        //       type:"expense", 
        //       purpes:purpus, 
        //       date: date,
        //       userName:userName,
        //       receved
        //     }
      
        //     const { data } = await axios.post("/api/transection",income_data);
            
        //     console.log(data);
        //     setLoading(false);
      
        //     toast.success(data.message);
        //     setAddComponent(false);
      
        //   } catch (error) {
        //     console.log(error);
        //     if (error instanceof AxiosError) {
        //         toast.error(`${error.response?.data?.message}`);
        //         console.log(error.response);
        //     } else {
        //         console.error("An unknown error occurred:", error);
        //     }
        //     setLoading(false);
        //   }
        }
      }

  return (
    <div className='z-10 absolute top-[50%] left-[50%] w-full h-full bg-[#0000002c] transform -translate-x-[50%] -translate-y-[50%] flex justify-center items-center'>
        { loading && <Loader /> }
        <div className='w-[35vh] sm:w-[500px] rounded-sm mx-auto bg-[#F7F7F7]'>
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
                    value={amout}
                    onChange={(e)=>setAmount(e.target.value)}
                    placeholder='Amount' />
                <input 
                    className='set_inp_ text-sm sm:text-lg mt-3'
                    type="text"
                    value={trang}
                    onChange={(e)=>setTrang(e.target.value)}
                    placeholder='Transaction type' />
                <div
                    className='w-full flex justify-center pt-3'
                >
                    <button
                        onClick={()=>handerUpload()}
                        className='px-3 py-2 bg-[green] font-semibold text-white shadow active:scale-95'
                    >Update</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiposideUserBalance