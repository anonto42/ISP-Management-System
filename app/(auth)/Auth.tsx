"use client"
import Loader from '@/components/loader/Loader';
import axios, { AxiosError } from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Auth = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handelLogin = async () => {
        try {
            setLoading(true);
            if (!email || !password) {
                return toast.error("All fields are required!"), setLoading(false);
            }

            const { data } = await axios.post("/api/auth",{email,password},{withCredentials: true});
            
            toast.success(data.message);
            
            setEmail("");
            setPassword("");
            setLoading(false);

            setTimeout(() => {
                window.location.reload();
            }, 2500);
            
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
    <div className='w-auto h-auto'>
        { loading && <Loader /> }
        <section className='py-11 px-6 rounded-xl bg-[#8290c0] shadow-md flex justify-center items-center'>
            <div className='w-full px-4'>
                <h1 className='font-bold text-[#04082c] text-center pb-5 text-2xl'>Login your accout</h1>
                <div className='inp-box-login'>
                    <input
                        onChange={ e => setEmail( e.target.value )}
                        className='inp-login'
                        placeholder='Email address'
                        type="email"
                        required
                        value={email}
                    />
                </div>
                <div className='inp-box-login'>
                    <input
                        onChange={ e => setPassword( e.target.value )}
                        className='inp-login'
                        placeholder='Password'
                        type="password"
                        value={password}
                    />
                </div>
                <div className='flex justify-center'>
                    <button 
                        type='submit' 
                        onClick={()=>handelLogin()}
                        className='btn'
                    >Login</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Auth