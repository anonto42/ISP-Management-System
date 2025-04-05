"use client"
import { AddSection } from "@/components/admin/Boxes/AddNew"
import { useState } from "react"
import { info } from "./page";

function Inner(
    {
        servers
    }:{
        servers:info[]
    }
) {
    const [addNew , setAddNew] = useState(false);
  return (
    <div>
        { addNew && <AddSection addNew={setAddNew} /> }
      <section className='mx-auto max-w-[1600px] min-w-[700px] overflow-x-auto p-6 bg-[white] shadow-md'>
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

export default Inner