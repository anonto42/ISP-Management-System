"use client"
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';

const AddNewUser = () => {
    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [phone,setPhone] = useState<string>("");
    const [extraNumber,setExtra] = useState<string>("");
    const [nid,setNid] = useState<string>("");
    const [district,setDistrict] = useState<string>("");
    const [upozala,setUpozala] = useState<string>("");
    const [area,setArea] = useState<string>("");
    const [houseNo,setHouse] = useState<string>("");
    const [flore,setFlore] = useState<string>("");
    const [userName,setUserName] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [connectiondate,setDate] = useState<Date>();
    const [connectionType,setType] = useState<string>("");
    const [netPackage,setPackage] = useState<string>("");
    const [referral,setReferral] = useState<string>("");
    const [wireCode,setCode] = useState<string>("");
    const [wireType,setWireType] = useState<string>("");
    const [reSeller,setReseller] = useState<string>("");
    const [secouratyDeposit,setDeposit] = useState<string>("");
    const [pictuer,setPictur] = useState<File>();
    const [loading,setLoading] = useState<boolean>(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);

            if (!name ||!phone ||!district ||!upozala ||!area ||!userName ||!password ||!connectiondate ||!connectionType ||!netPackage ||!wireCode ||!wireType ||!secouratyDeposit) {
                return toast.error("Some fields are required!"), setLoading(false);
            }

            const formData = new FormData();
            formData.append("fullName", name);
            formData.append("email", email);
            formData.append("phoneNumber", phone);
            formData.append("nid", nid);
            formData.append("extraNumber", extraNumber);
            formData.append("interNetPackage", netPackage);
            formData.append("district", district);
            formData.append("upozala", upozala);
            formData.append("area", area);
            formData.append("houseNo", houseNo);
            formData.append("flooreNo", flore.toString());
            formData.append("userName", userName);
            formData.append("password", password);
            formData.append("dateOfConnection", connectiondate!.toISOString());
            formData.append("connectivityType", connectionType);
            formData.append("referral", referral);
            formData.append("wireCode", wireCode);
            formData.append("wireType", wireType);
            formData.append("reSeller", reSeller);
            formData.append("securityDeposit", secouratyDeposit);
            formData.append("picture", pictuer!);

            const { data } = await axios.post("/api/create",formData,{withCredentials:true});

            toast.success(data.message);

            setName("");
            setEmail("");
            setPhone("");
            setExtra("");
            setNid("");
            setDistrict("");
            setUpozala("");
            setArea("");
            setHouse("");
            setFlore("");
            setUserName("");
            setPassword("");
            setDate(new Date());
            setType("");
            setPackage("");
            setReferral("");
            setCode("");
            setWireType("");
            setReseller("");
            setDeposit("");
            setPictur(undefined);
            setLoading(false);
            
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
    
  return (
    <div className='w-full h-full bg-[#EFECEC] p-6 shadow-lg'>
        { loading && <Loader/> }
        <div>
            <h1 className='text-lg font-semibold border-b pb-4 border-[#b3b3b3]'>{"Add New Customer"}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4'>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Full Name</h4>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Email</h4>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Phone</h4>
                    <input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Extra Number</h4>
                    <input
                        value={extraNumber}
                        onChange={e => setExtra(e.target.value)}
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>NID</h4>
                    <input
                        value={nid}
                        onChange={e => setNid(e.target.value)}
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>District</h4>
                    <input
                        value={district}
                        onChange={e => setDistrict(e.target.value)}
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Upozala</h4>
                    <input
                        value={upozala}
                        onChange={e => setUpozala(e.target.value)}
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Area</h4>
                    <input
                        value={area}
                        onChange={e => setArea(e.target.value)}
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>House No</h4>
                    <input
                        value={houseNo}
                        onChange={e => setHouse(e.target.value)}
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Floor</h4>
                    <input
                        value={flore}
                        onChange={e => setFlore(e.target.value)}
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>UserName</h4>
                    <input
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        required
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Password</h4>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Connection date</h4>
                    <input
                        onChange={e => setDate(new Date(e.target.value))}
                        className='input-newCustomer' 
                        type="date" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Type of connectivity</h4>
                    <select
                        value={connectionType}
                        onChange={e => setType(e.target.value)}
                        className='input-newCustomer'
                    >
                        <option value="">Select type</option>
                        <option value="dynamic">Dynamic</option>
                        <option value="static">Static</option>
                    </select>
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Package</h4>
                    <input
                        value={netPackage}
                        onChange={e => setPackage(e.target.value)}
                        required
                        placeholder='Serial number of the package'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Referral</h4>
                    <input
                        value={referral}
                        onChange={e => setReferral(e.target.value)}
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Wire-Code</h4>
                    <input
                        value={wireCode}
                        onChange={e => setCode(e.target.value)}
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Wire-Type</h4>
                    <input
                        value={wireType}
                        onChange={e => setWireType(e.target.value)}
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>ReSeller</h4>
                    <input
                        value={reSeller}
                        onChange={e => setReseller(e.target.value)}
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Security Deposit</h4>
                    <input
                        value={secouratyDeposit}
                        onChange={e => setDeposit(e.target.value)}
                        placeholder='Write...'
                        className='input-newCustomer' 
                        type="text" />
                </div>
                <div className='input-box-newCustomer'>
                    <h4 className='lavel_for_Input'>Picture</h4>
                    <input
                        onChange={e => setPictur(e.target.files ? e.target.files[0] : undefined)}
                        className='input-newCustomer' 
                        type="file" />
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <button 
                    onClick={()=>handleSubmit()}
                    className='px-3 py-2 bg-green-700 text-lg font-semibold text-white mt-4 shadow-lg active:scale-95 active:bg-green-600 duration-150 ease-linear'>Create User</button>
            </div>
        </div>
    </div>
  )
}

export default AddNewUser