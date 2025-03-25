'use client'
import React from 'react';
import { MdBlock, MdDeleteOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { acction } from './Paginate';
import Link from 'next/link';

interface props<T>{
    data:T;
    collums:number;
    acction:acction;
}

interface data {
    id?:string;
}


const SingelShowItem = <T extends data>({data,collums,acction}:props<T>) => {

    const deleteHanaler=():void=>{}
    const editeHanaler=():void=>{}

  return (
    <div 
        className={`grid items-center bg-white shadow mb-2 px-3 py-2 rounded-lg`}
        style={{gridTemplateColumns: `repeat(${collums}, 1fr)`}}
        >

        {Object.values(data).map((value, index) => (
            <h4 key={index} className='text-sm font-extralight'>
                {value as string}
            </h4>
        ))}

        <div className='flex gap-2'>
            {
                acction.delete? <div 
                    onClick={()=>deleteHanaler()}
                    title='Delete'
                    className='w-[30px] h-[30px] bg-[#f7a5a5] flex justify-center items-center text-2xl text-[#ff0000] rounded-lg shadow'>
                    <MdDeleteOutline />
                </div>:<></>
            }
            {
                acction.view? 
                <Link href={`/admin/user?id=${data.id}`}>
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