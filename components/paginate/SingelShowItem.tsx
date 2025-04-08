'use client'
import React, { Dispatch, SetStateAction, useState } from 'react';
import { MdBlock, MdDeleteOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { acction } from './Paginate';
import Link from 'next/link';
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';
import axios from 'axios';

interface props<T>{
    data:T;
    collums:number;
    acction:acction;
    getRefresher?:Dispatch<SetStateAction<number>>
}

interface data {
    userName?:string;
    id?:string;
    modelName?: string;
}


const SingelShowItem = <T extends data>({data,collums,acction,getRefresher}:props<T>) => {
    const [loadin,setLoading] = useState<boolean>(false);
    const freshedData = { ...data };
    delete freshedData.id;
    delete freshedData.modelName;

    const deleteHanaler= async()=>{
        try {
            setLoading(true);
            if (!data.id) {
                return(
                    toast.info(`${data.id}`),
                    toast.error("Id is required to delete info!"),
                    setLoading(false)
                )
            }

            const axiosData = await axios.post("/api/universel",{ id: data.id, modelName:data.modelName },{withCredentials:true});

            if(getRefresher){
                getRefresher(prevCount => {
                    const newCount = prevCount + 2;
                    getRefresher(newCount + 1); // Update based on new count value
                    return newCount;
                  })
            }
            toast.success(`${axiosData.data.message}`)
            setLoading(false)

            
        } catch (error) {
            console.log("this is the error from promis: "+error)
            toast.error("Failed to delete user!")
            setLoading(false);
        }
    }
    const editeHanaler=():void=>{}

  return (
    <div 
        className={`grid items-center bg-white shadow mb-2 px-3 py-2 rounded-lg`}
        style={{gridTemplateColumns: `repeat(${collums}, 1fr)`}}
        >
            { loadin && <Loader /> }

        {Object.values(freshedData).map((value, index) => 
            <h4 key={index} className='text-sm font-extralight'>
                {value as string}
            </h4>
        )}

        <div className='flex gap-2'>
            {
                acction.delete? <div 
                    onClick={()=>deleteHanaler()}
                    title='Delete'
                    className='acctionIcon text-[#ff0000] bg-[#f7a5a5] active:bg-[#ff8888]'>
                    <MdDeleteOutline />
                </div>:<></>
            }
            {
                acction.view? 
                <Link href={`/admin/user?id=${data.userName}`}>
                    <div
                    title='View'
                    className='acctionIcon text-white active:bg-[#90a8f5] bg-[#a5b8f7]'>
                    <FaEye />
                </div>
                </Link>
                :<></>
            }
            {
                acction.edite?<div 
                    onClick={()=>editeHanaler()}
                    title='Edite'
                    className='acctionIcon active:bg-[#7ff774] bg-[#d7ffd3] text-green-800'>
                        <FaRegPenToSquare/>
                </div> :<></>
            }
            {
                acction.block?<div 
                    onClick={()=>editeHanaler()}
                    title='Edite'
                    className='acctionIcon bg-[#F79965] text-[#D63613] active:bg-[#90a8f5]'>
                    <MdBlock />
                </div> :<></>
            }
            
        </div>
    </div>
  )
}

export default SingelShowItem