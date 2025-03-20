'use client'
import React from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { acction, user } from './Paginate';

interface props{
    data:user;
    collums:number;
    acction:acction;
}

const SingelShowItem = ({data,collums,acction}:props) => {

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
                {value}
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
            
        </div>
    </div>
  )
}

export default SingelShowItem