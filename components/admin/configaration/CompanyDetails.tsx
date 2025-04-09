"use client"
import Loader from '@/components/loader/Loader';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const CompanyDetails = () => {
    
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [hotline, setHotline] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [Address, setAddress] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(0);

    useEffect(()=>{
        ;( async() =>{
            setLoading(true);

            const { data } = await axios.post("/api/auth/update",{},{withCredentials:true});
            setName(data.data.area);
            setEmail(data.data.upozala);
            setHotline(data.data.nid);
            setNumber(data.data.phoneNumber);
            setAddress(data.data.district);

            setLoading(false);
        })()
    },[counter])

    const handelUpdate = async () => {
        try {
            setLoading(true);

            const body = {
                phoneNumber:number.trim(),
                nid:hotline.trim(),      
                district:Address.trim(),           
                upozala:email.trim(),         
                area:name.trim()
              }
            
            const { data } = await axios.post("/api/auth/update",body,{withCredentials:true});

            setName(data.data.name);
            setEmail(data.data.email);
            setHotline(data.data.extraNumber);
            setNumber(data.data.number);
            setAddress(data.data.address);

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
        {loading && <Loader /> }
          <h1 className="text-lg font-semibold border-b border-[#e2e2e2] pb-2 mb-4">Company Details</h1>
          <div className='grid grid-rows-6 gap-4'>
            <input
              value={name}
              onChange={e => setName( e.target.value )}
              placeholder='Name'
              className='set_inp_' 
              type="text"
            />
            <input 
              value={email}
              onChange={e => setEmail( e.target.value )}
              placeholder='E-Mail Address'
              className='set_inp_' 
              type="text" 
            />
            <input 
              value={hotline}
              onChange={e => setHotline( e.target.value )}
              placeholder='Hotline'
              className='set_inp_' 
              type="text"
            />
            <input 
              value={number}
              onChange={e => setNumber( e.target.value )}
              placeholder='Number'
              className='set_inp_' 
              type="text" 
            />
            <input 
              value={Address}
              onChange={e => setAddress( e.target.value )}
              placeholder='Address'
              className='set_inp_' 
              type="text" 
            />
            <div className='flex justify-center'>
              <button onClick={()=>handelUpdate()} className='py-2 px-4 shadow bg-green-700 font-semibold text-white'>Update</button>
            </div>
          </div>
        </div>
  )
}

export default CompanyDetails