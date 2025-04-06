"use client"
import Loader from '@/components/loader/Loader';
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const TopUp = () => {
  const [userName, setUserName] = useState<string>("");
  const [amount, setAmout] = useState<string>("");
  const [paymentDate, setPaymentDate] = useState<Date>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!userName.trim() || !amount.trim() || !paymentDate) {
        return(
          toast.error("All fields are required!"),
          setLoading(false)
        )
      }

      const { data } = await axios.post('/api/reseller-topUp', {userName, amount, date:paymentDate });
      toast.success(data.message);
      setUserName("");
      setAmout("");
      setPaymentDate(new Date());
      setLoading(false);

    } catch (error) {
      if (error instanceof AxiosError) {
        setLoading(false);
        console.log(error.response?.data.message)
        toast.error(error.response?.data.message)
      }else{
        console.log("An unknown error occurred:", error);
      }
    }
  }

  const handelCalsel =()=> ( setUserName(""), setAmout(""), setPaymentDate(new Date()))

  return (
    <div>
      {loading && <Loader/>}
      <section className='w-full h-full'>
        <div className='w-full mx-auto max-w-[700px] bg-[#f5f7ff] shadow-lg p-6 mt-6 rounded-lg'>
          <h1 className="text-xl font-semibold border-b border-[#e2e2e2] pb-2">Add new Top-Up</h1>
          <div className="grid gap-4 py-4 max-w-[500px] mx-auto">
            <div className="add_item_inp_box">
                <h3 className="">Reseller</h3>
                <input
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    placeholder='Select by username'
                    className="add_item_inp" 
                    type="text" />
            </div>
            <div className="add_item_inp_box">
                <h3 className="">Amount (Taka)</h3>
                <input
                    value={amount}
                    onChange={e => setAmout(e.target.value)}
                    placeholder='Amount(00 taka)'
                    className="add_item_inp" 
                    type="text" />
            </div>
            <div className="add_item_inp_box">
                <h3 className="mr-2">Payment date</h3>
                <input
                    onChange={e => setPaymentDate( new Date(e.target.value))}
                    className="add_item_inp" 
                    type="date" />
            </div>
          </div>
          <div className="flex justify-around mt-3">
              <button
                onClick={()=>handelCalsel()}
                className="_btn_ bg-red-200 text-red-700 rounded-sm">Close</button>
              <button 
                onClick={()=>handleSubmit()} 
                className="_btn_ bg-green-700 text-white rounded-sm">Top-Up</button>    
          </div>
        </div>
      </section>
    </div>
  )
}

export default TopUp