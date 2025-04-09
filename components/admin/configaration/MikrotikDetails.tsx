"use client"
import Loader from '@/components/loader/Loader';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const MikrotikDetails = () => {
    const [userName, setUerName] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [ipAddress, setIPaddress] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(0);

    useEffect(()=>{
        ;( async() =>{
            setLoading(true);

            const { data } = await axios.post("/api/auth/update",{},{withCredentials:true});
            setUerName(data.data.houseNo);
            setUserPassword(data.data.floorNo);
            setIPaddress(data.data.connectivityType);

            setLoading(false);
        })()
    },[counter])

      const handelUpdate = async () => {
          try {
              setLoading(true);
  
              const body = {
                  houseNo:userName.trim(),
                  floorNo:userPassword.trim(),      
                  connectivityType:ipAddress.trim(), 
                }
              
              const { data } = await axios.post("/api/auth/update",body,{withCredentials:true});
  
              console.log(data)

              setUerName(data.data.houseNo);
              setUserPassword(data.data.floorNo);
              setIPaddress(data.data.connectivityType);
  
              setCounter( prevous => {
                  const corrent = prevous + 1;
                  setCounter( corrent + 1)
                  return corrent
              })
  
              toast.success(data.message)
  
              setLoading(false);
  
          } catch (error) {
              console.log(error)
              toast.warning("Getting problem on the updatation!")
              setLoading(false);
          }
      }

  return (
    <div className='bg-[#ffffff] p-4 shadow-lg'>
      { loading && <Loader />}
      <h1 className="text-lg font-semibold border-b border-[#e2e2e2] pb-2 mb-4">Mikrotik Details</h1>
      <div className='grid grid-rows-4 gap-4'>
        <input 
          value={ipAddress}
          onChange={e => setIPaddress( e.target.value )}
          placeholder='IP'
          className='set_inp_' 
          type="text"
           />
          <input 
          value={userName}
          onChange={e => setUerName( e.target.value )}
          placeholder='userName'
          className='set_inp_' 
          type="text" 
          />
          <input 
          value={userPassword}
          onChange={e => setUserPassword( e.target.value )}
          placeholder='Password'
          className='set_inp_' 
          type="password"
          />
          <div className='flex justify-center'>
            <button onClick={()=>handelUpdate()} className='py-2 px-4 shadow bg-green-700 font-semibold text-white'>Update</button>
          </div>
      </div>
    </div>
  )
}

export default MikrotikDetails