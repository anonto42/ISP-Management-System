"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';

const AddReseller = () => {
    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [phone,setPhone] = useState<string>("");
    const [nid,setNid] = useState<string>("");
    const [upozala,setUpozala] = useState<string>("");
    const [area,setArea] = useState<string>("");
    const [userName,setUserName] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [connectiondate,setDate] = useState<Date>();
    const [secouratyDeposit,setDeposit] = useState<string>("");
    const [pictuer,setPictur] = useState<File | undefined>(undefined);
    const [loading,setLoading] = useState<boolean>(false);


    const handerCreate = async () => {
        try {
            setLoading(true);
            if (!name ||!phone ||!upozala ||!area ||!userName ||!password ||!connectiondate ||!secouratyDeposit) {
                return toast.error("Some fields are required!"), setLoading(false);
            }

            const formData = new FormData();
            formData.append("fullName", name);
            formData.append("email", email);
            formData.append("phoneNumber", phone);
            formData.append("nid", nid);
            formData.append("extraNumber", "");
            formData.append("interNetPackage", "");
            formData.append("district", "");
            formData.append("upozala", "");
            formData.append("area", area);
            formData.append("houseNo", "");
            formData.append("flooreNo", "");
            formData.append("userName", userName);
            formData.append("password", password);
            formData.append("dateOfConnection", connectiondate!.toISOString());
            formData.append("connectivityType", "");
            formData.append("referral", "");
            formData.append("wireCode", "");
            formData.append("wireType", "");
            formData.append("reSeller", "");
            formData.append("userType", "reseller");
            formData.append("securityDeposit", secouratyDeposit);
            formData.append("picture", pictuer!);

            const { data } = await axios.post("/api/create",formData,{withCredentials:true});

            toast.success(data.message);
            setName("");
            setEmail("");
            setPhone("");
            setNid("");
            setUpozala("");
            setArea("");
            setUserName("");
            setPassword("");
            setDate(new Date());
            setDeposit("");
            setPictur(undefined);
            setLoading(false);

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='w-full h-full'>
                { loading && <Loader/>}
            <div className='w-full h-full bg-[#f3f3f3] p-6 shadow-lg'>
                <div className='grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4'>
                    <div className='input-box-newCustomer'>
                        <h4 className='lavel_for_Input'>Full Name</h4>
                        <input
                            placeholder='Write...'
                            className='input-newCustomer' 
                            type="text" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                    </div>
                    <div className='input-box-newCustomer'>
                        <h4 className='lavel_for_Input'>Email</h4>
                        <input
                            placeholder='Write...'
                            className='input-newCustomer' 
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                    </div>
                    <div className='input-box-newCustomer'>
                        <h4 className='lavel_for_Input'>Phone</h4>
                        <input
                            placeholder='Write...'
                            className='input-newCustomer' 
                            type="text"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            />
                    </div>
                    <div className='input-box-newCustomer'>
                        <h4 className='lavel_for_Input'>NID</h4>
                        <input
                            placeholder='Write...'
                            className='input-newCustomer' 
                            type="text" 
                            value={nid}
                            onChange={e => setNid(e.target.value)}
                            />
                    </div>
                    <div className='input-box-newCustomer'>
                        <h4 className='lavel_for_Input'>Upozala</h4>
                        <input
                            placeholder='Write...'
                            className='input-newCustomer' 
                            type="text" 
                            value={upozala}
                            onChange={e => setUpozala(e.target.value)}
                            />
                    </div>
                    <div className='input-box-newCustomer'>
                        <h4 className='lavel_for_Input'>Area</h4>
                        <input
                            placeholder='Write...'
                            className='input-newCustomer' 
                            type="text" 
                            value={area}
                            onChange={e => setArea(e.target.value)}
                            />
                    </div>
                    <div className='input-box-newCustomer'>
                        <h4 className='lavel_for_Input'>Password</h4>
                        <input
                            placeholder='Write...'
                            className='input-newCustomer' 
                            type="text" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                    </div>
                    <div className='input-box-newCustomer'>
                        <h4 className='lavel_for_Input'>userName</h4>
                        <input
                            placeholder='Write...'
                            className='input-newCustomer' 
                            type="text"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            />
                    </div>
                    <div className='input-box-newCustomer'>
                        <h4 className='lavel_for_Input'>Joining date</h4>
                        <input
                            className='input-newCustomer' 
                            type="date"
                            onChange={e => setDate(new Date(e.target.value))}
                            />
                    </div>
                    <div className='input-box-newCustomer'>
                        <h4 className='lavel_for_Input'>Security Deposit</h4>
                        <input
                            placeholder='Write...'
                            className='input-newCustomer' 
                            type="text"
                            value={secouratyDeposit}
                            onChange={e => setDeposit(e.target.value)}
                            />
                    </div>
                    <div className='input-box-newCustomer'>
                        <h4 className='lavel_for_Input'>Picture</h4>
                        <input
                            placeholder=''
                            className='input-newCustomer' 
                            type="file"
                            onChange={e => setPictur(e.target.files ? e.target.files[0] : undefined)}
                            />
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <button 
                        onClick={()=>handerCreate()}
                        className='px-3 py-2 bg-green-700 text-lg font-semibold text-white mt-4 shadow-lg active:scale-95 active:bg-green-600 duration-150 ease-linear'>Create Reseller</button>
                </div>
            </div>
        </div>
  )
}

export default AddReseller