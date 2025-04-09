"use client"
import Loader from '@/components/loader/Loader';
import axios, { AxiosError } from 'axios';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify';

export function AddSection(
  {
    addNew,
    setRefresh
  }:{
    setRefresh: Dispatch<SetStateAction<number>>;
    addNew: Dispatch<SetStateAction<boolean>>
  }
){
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string>("");
  const [serverLink, setServerLink] = useState<string>("");

  const handelSubmit = async () => {
      try {
          setLoading(true);
          if (!name || !serverLink) {
              return (
                  toast.error('All fields are required'),
                  setLoading(false)
              )
          }
          const { data } = await axios.post('/api/create/ftp',{name, serverLink});
          setLoading(false);
          addNew(false);
          setRefresh( counter => {
            const count = counter + 1
            setRefresh( count + 1 )
            return count
          })
          toast.success(data.message);
      } catch (error) {
          setLoading(false);
          if(error instanceof AxiosError){
              toast.error(error.response?.data?.message);
          } else {
              toast.error('An error occurred');
          }
      }
  }

    return(
      <div className='w-[400px] transform top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-4 bg-[#f1f1f1] absolute rounded-lg shadow-xl shadow-[#0000003f] grid grid-rows-3'>
        { loading && <Loader /> }
        <input
          placeholder='Name Of the Server' 
          className='set_inp_ my-4 text-lg'
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          />
        <input
          placeholder='Live link of the server' 
          className='set_inp_ my-4'
          type="text"
          value={serverLink}
          onChange={e=> setServerLink(e.target.value)}
          />
        {
          !name.trim() || !serverLink.trim()?
            (
              <button 
                onClick={()=>addNew(false)}
                className='_btn_ my-4 rounded-lg bg-red-100 flex justify-center items-center border border-red-600 text-red-600'>
                  Cancel
              </button>
            )
            :
            (
              <button 
                onClick={()=>handelSubmit()}
                className='_btn_ my-4 bg-green-100 flex rounded-lg justify-center items-center border border-green-600 text-green-600'>
                  Add
              </button>
            )
        }
      </div>
    )
  } 