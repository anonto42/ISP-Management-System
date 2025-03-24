'use client'
import React from 'react';
import { MdBlock, MdDeleteOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { acction } from './Paginate';

interface props<T>{
    data:T;
    collums:number;
    acction:acction;
}


const SingelShowItem = <T extends object>({data,collums,acction}:props<T>) => {

    const deleteHanaler=():void=>{}
    const editeHanaler=():void=>{}
    const viewHanaler=():void=>{}

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
                acction.view? <div 
                    onClick={()=>viewHanaler()}
                    title='View'
                    className='w-[30px] h-[30px] bg-[#a5b8f7] flex justify-center items-center text-xl text-[#e3eefd] rounded-lg shadow'>
                    <FaEye />
                </div>:<></>
            }
            {
                acction.edite?<div 
                    onClick={()=>editeHanaler()}
                    title='Edite'
                    className='w-[30px] h-[30px] bg-[#d7ffd3] flex justify-center items-center text-xl text-[#00ff15] rounded-lg shadow'>
                    <FaRegPenToSquare />
                </div> :<></>
            }
            {
                acction.block?<div 
                    onClick={()=>editeHanaler()}
                    title='Edite'
                    className='w-[30px] h-[30px] bg-[#F79965] flex justify-center items-center text-xl text-[#D63613] rounded-lg shadow'>
                    <MdBlock />
                </div> :<></>
            }
            
        </div>
    </div>
  )
}

export default SingelShowItem