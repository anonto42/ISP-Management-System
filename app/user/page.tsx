"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import imag from "@/app/icon.png"
import Link from 'next/link'


const User = () => {
  const [rows] = useState([
    { id: 1, name: 'John Doe', age: 30, amout:"2000",status:"PAID",date:"10-02-2034" },
    { id: 2, name: 'Jane Smith', age: 25, amout:"2000",status:"PAID",date:"10-02-2034" },
    { id: 3, name: 'Sam Brown', age: 35,amout:"2000",status:"PAID",date:"10-02-2034" },
    { id: 4, name: 'Lisa White', age: 28, amout:"2000",status:"PAID",date:"10-02-2034" },
    { id: 5, name: 'Mark Black', age: 40, amout:"2000",status:"PAID",date:"10-02-2034" },
  ]);

  return (
    <div className='py-4'>

      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4'>

        <div className='bg-[#ffffff] p-4 shadow-[0px_4px_10px_#00000065] rounded-sm'>
          <div className="">
            <h1 className='text-xl text-gray-700 font-semibold'>Welcome back, Naim Babu!</h1>
            <p className='text-sm text-gray-500'>Thank you for connected with us.</p>
          </div>
          <div className='flex py-6 justify-between'>
            <div className=''>
              <h1 className='font-semibold text-xl text-sky-400'>{"10"} MBPS</h1>
              <p className='text-sm my-3 text-gray-500'>Your Internet package</p>
              <button className='px-4 py-2 bg-sky-600 font-semibold text-white rounded-sm shadow-lg'>Upgrade</button>
            </div>
            <div className='relative w-[50%]'>
              <Image
                src={imag}
                alt='Logo'
                fill
                />
            </div>
          </div>
        </div>

        <div className='bg-[#ffffff] p-4 shadow-[0px_4px_10px_#00000065] rounded-sm'>
          <div className="border-gray-400 pb-3 border-b">
            <h1 className='text-2xl text-gray-700 font-semibold'>Naim Babu</h1>
          </div>
          <div className='flex flex-col py-6'>

            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-cyan-400 rounded-full'/>
                <p className='text-sm text-gray-500'>Connection Type</p>
              </div>
              <h3 className='font-semibold text-gray-500'>Static IP</h3>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-amber-400 rounded-full'/>
                <p className='text-sm text-gray-500'>Package</p>
              </div>
              <h3 className='font-semibold text-gray-500'>10 MBPS</h3>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-fuchsia-400 rounded-full'/>
                <p className='text-sm text-gray-500'>ID</p>
              </div>
              <h3 className='font-semibold text-gray-500'>2993hfhdk</h3>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-red-400 rounded-full'/>
                <p className='text-sm text-gray-500'>Monthly</p>
              </div>
              <h3 className='font-semibold text-gray-500'>800 Taka</h3>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-purple-400 rounded-full'/>
                <p className='text-sm text-gray-500'>User name</p>
              </div>
              <h3 className='font-semibold text-gray-500'>userInfo</h3>
            </div>

            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-emerald-400 rounded-full'/>
                <p className='text-sm text-gray-500'>Password</p>
              </div>
              <h3 className='font-semibold text-gray-500'>sntech</h3>
            </div>

          </div>
        </div>

        <div className='grid gap-4'>

          <div className='grid grid-cols-2 gap-4'>

              <div className='h-[120px] bg-white flex items-center justify-center text-center rounded-sm shadow-[0px_4px_10px_#00000065]'>
                <h1 className='text-sm text-gray-500'>Invoivce
                  <br />
                  <span className='text-xl font-semibold'>{"5"}</span>
                </h1>
              </div>
              <div className='h-[120px] bg-white flex items-center justify-center text-center rounded-sm shadow-[0px_4px_10px_#00000065]'>
                <h1 className='text-sm text-gray-500'>Complain
                  <br />
                  <span className='text-xl font-semibold'>{"0"}</span>
                </h1>
              </div>

          </div>

          <div className='shadow-[0px_4px_10px_#00000065] text-gray-500 rounded-sm bg-white p-4'>
            <h4 className='text-sm'>Billings</h4>
            <h1 className='text-xl font-semibold'>Pay bills on time!</h1>
            <p className='text-sm'>We are strongly recommend you to pay your pils on time.</p>
            <Link href={"/user/pay"} >
              <button className='text-white font-semibold px-4 py-2 bg-sky-600 rounded-lg shadow-sm mt-3'>Pay Bill</button>
            </Link>
          </div>

        </div>

      </section>

      <section className='w-full mt-4 px-4'>
        <table className="min-w-full border-collapse border border-[#FFFFFF]">
          <thead>
            <tr className="bg-[#FFFFFF]">
              <th className="border border-[#FFFFFF] px-4 py-2">INVOIVE NO:</th>
              <th className="border border-[#FFFFFF] px-4 py-2">ID</th>
              <th className="border border-[#FFFFFF] px-4 py-2">USER NAME</th>
              <th className="border border-[#FFFFFF] px-4 py-2">AMMOUNT</th>
              <th className="border border-[#FFFFFF] px-4 py-2">DATE</th>
              <th className="border border-[#FFFFFF] px-4 py-2">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className='bg-[#60a4fd38]'>
                <td className="border border-[#FFFFFF] px-4 py-2">{row.id}</td>
                <td className="border border-[#FFFFFF] px-4 py-2">{row.age}</td>
                <td className="border border-[#FFFFFF] px-4 py-2">{row.name}</td>
                <td className="border border-[#FFFFFF] px-4 py-2">{row.amout}</td>
                <td className="border border-[#FFFFFF] px-4 py-2">{row.date}</td>
                <td className="border border-[#FFFFFF] px-4 py-2">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default User