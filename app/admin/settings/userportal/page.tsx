"use client"
import React, { useState } from 'react'


const servers = [
  {
    link:"http://xnxx.see",
    name:"Mouvi",
  },
  {
    link:"http://phornhun.tv",
    name:"Videos",
  },
]

const page = () => {
  const [addNew,setAddNew]=useState(false);

  return (
    <div className='p-6 w-full h-svh relative'>
      { addNew && <AddSection/> }
      <section className='mx-auto max-w-[1600px] min-w-[700px] overflow-x-auto p-6 bg-[white] shadow-lg'>
        <div className='border-b border-[#cacaca] py-2 flex justify-between items-center'>
          <h1 className='text-xl'>
            FTP
          </h1>
          <button onClick={()=>setAddNew(!addNew)} className='px-4 py-2 bg-green-600 font-semibold text-white'>Add new</button>
        </div>

        <div className='mt-3'>
          <h2 className='text-lg'>Existing:</h2>
          {
            servers.map((item,index)=>{
              return(
                <div key={index} className='mt-3 bg-[#f0f2f7] px-4 py-2 flex justify-between items-center'>
                  <h1 className='text-lg'>Server Name: <span className='italic font-bold'>{item.name}</span></h1>
                  <button className='px-4 py-2 ease-linear duration-150 active:scale-95 bg-red-200 text-red-600 rounded-md shadow-sm'>Delete</button>
                  <h1 className='text-lg'>Server Link: <span className='italic font-bold'>{item.link}</span></h1>
                </div>
              )
            })
          }
        </div>

      </section>
    </div>
  )
}

export default page

export function AddSection(){
  return(
    <div className='w-[400px] transform top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-4 bg-[#f1f1f1] absolute rounded-lg shadow-xl shadow-black grid grid-rows-3'>
      <input
        placeholder='Name Of the Server' 
        className='set_inp_ my-4 text-lg'
        type="text" name="" id="" />
      <input
        placeholder='Live link of the server' 
        className='set_inp_ my-4'
        type="text" name="" id="" />
      <button className='_btn_ my-4 bg-green-100 flex justify-center items-center border border-green-600 text-green-600'>Add</button>
    </div>
  )
} 