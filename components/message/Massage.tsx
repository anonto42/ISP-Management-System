"use client"
import React, { useState } from 'react'
import { BiMailSend } from 'react-icons/bi'
import { BsSend } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import Loader from '../loader/Loader'
import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

const Massage = ({isSendAll}:{isSendAll?:boolean}) => {
    const [loading,setLoading] = useState<boolean>(false);
    const [to,setTo] = useState<string>("");
    const [message,setMessage] = useState<string>("");

    const handelSubmit = async ()=>{
        try {

            setLoading(true);

            const { data } = await axios.post("/api/message",{number:to,message})

            setTo("");
            setMessage("");
            setLoading(false);
            
            toast.success(data.message);
            
        } catch (error: unknown) {
          if (error instanceof AxiosError) {
              toast.error(`${error.response?.data?.message}`);
              console.log(error.response);
          } else {
              console.error("An unknown error occurred:", error);
          }
          setLoading(false);
      }
    }

    const handelClear =()=>{
        setTo("");
        setMessage("");
    }
    
  return (
    <div className='w-full h-full relative'>
        { loading && <Loader /> }
        <section className='w-full bg-[#EFECEC] p-4 flex shadow-lg'>
            <div className='w-[220px] h-full font-semibold text-white bg-amber-100'>
              <button 
                  onClick={()=>handelSubmit()}
                  className='w-full flex justify-center items-center gap-1 bg-green-600 py-3 shadow'>
                <BiMailSend className='text-2xl' />
                <span>Send Massage</span>
              </button>
            </div>
            <div className='w-full h-full pl-5'>
              <input 
                type="text"
                placeholder='To:'
                value={isSendAll?"Send to All":to}
                onChange={e => setTo( e.target.value )}
                className={`w-full border px-3 py-2 border-[#c4c4c4] bg-white outline-cyan-200 mb-3`}
              />
              <textarea 
                value={message}
                onChange={e => setMessage( e.target.value )}
                placeholder='Massage'
                className='w-full border px-3 py-2 border-[#c4c4c4] bg-white outline-cyan-200 min-h-[300px]'
              />
              <div className='w-full flex gap-4 justify-center'>
                <button
                    onClick={()=>handelSubmit()}
                    className='_btn_ bg-green-600'
                    >
                  <BsSend/>
                  <span>Send</span>
                </button>
                <button
                    onClick={()=>handelClear()}
                    className='_btn_ bg-red-600'
                    >
                  <IoMdClose />
                  <span>Discard</span>
                </button>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Massage