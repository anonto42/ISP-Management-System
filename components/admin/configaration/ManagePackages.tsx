"use client"
import Loader from '@/components/loader/Loader';
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ManagePackages = () => {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [mbps, setMBPS] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handelUpload = async ()=> {
    try {
      setLoading(true);
      const sendData = {
        title,
        price,
        mbps
      };
      const { data } = await axios.post("/api/create/package",sendData,{withCredentials:true});
      console.log(data);
      toast.success(data.message);
      setTitle("");
      setPrice("");
      setMBPS("");
      setLoading(false);
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
        setLoading(false);
      }else{
        toast.error("Somting was error!")
        setLoading(false);
      }
    }
  }

  return (
    <div className='bg-[#ffffff] p-4 shadow-lg'>
      {loading && <Loader />}
      <h1 className='text-lg font-semibold border-b border-[#e2e2e2] pb-2 mb-4'>Public a new Packages</h1>
      <div className='grid grid-rows-4 gap-4'>
        <input 
          value={title}
          onChange={e => setTitle( e.target.value )}
          placeholder='Title of the package'
          className='set_inp_' 
          type="text"
           />
          <input 
          value={price}
          onChange={e => setPrice( e.target.value )}
          placeholder='Price'
          className='set_inp_' 
          type="text" 
          />
          <input 
          value={mbps}
          onChange={e => setMBPS( e.target.value )}
          placeholder='MBPS'
          className='set_inp_' 
          type="text"
          />
          <div className='flex justify-center'>
            <button onClick={()=>handelUpload()} className='py-2 px-4 shadow bg-green-700 font-semibold text-white'>Upload</button>
          </div>
      </div>
    </div>
  )
}

export default ManagePackages