import prismaDB from '@/prisma/pot'
import React from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { LuContactRound } from 'react-icons/lu'
import { MdOutlineMail } from 'react-icons/md'

const ContactPage = async () => {

  const woner = await prismaDB.user.findFirst({where:{userType:"admin"}});

  return (
    <div>
      {/* <section className='grid grid-cols-1 p-4'>
        <div className='bg-white p-4 rounded-lg text-gray-600 shadow-lg grid gap-3'>
          <h2 className='text-lg font-semibold'>Contact us</h2>
          <p className='text-sm'>Send us a ticket, If your problem needs an ugrent solution then call us.</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <input 
              className='border border-gray-400 px-4 py-2 rounded-lg outline-none'
              type="text"
              placeholder='Name:'
            />
            <input 
              className='border border-gray-400 px-4 py-2 rounded-lg outline-none'
              type="text"
              placeholder='Your ID:'  
            />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <input 
              className='border border-gray-400 px-4 py-2 rounded-lg outline-none'
              type="text"
              placeholder='Your contact number:'
            />  
            <div></div>
          </div>
          <div className='grid grid-cols-1'>
            <textarea 
              className='border border-gray-400 px-4 py-2 rounded-lg outline-none min-h-[150px]'
              placeholder='You can say us what is your problem.'
            />
          </div>
          <button className='px-4 py-2 rounded-lg shadow-lg bg-sky-600 font-semibold text-white active:scale-95 duration-150 ease-linear'>Send</button>
        </div>
      </section> */}
      <section className='grid grid-cols-1 p-4'>
        <div className='bg-white p-4 rounded-lg text-gray-600 shadow-lg grid gap-3'>
          <h2 className='text-lg font-semibold italic text-gray-400'>About</h2>

          <div className='flex items-center gap-2'>
            <FaRegUser />
            <h2 className='font-semibold'>Full Name: <span className='text-sm font-medium'>{woner?.fullName}</span></h2>
          </div>
          <div className='flex items-center gap-2'>
            <LuContactRound />
            <h2 className='font-semibold'>Contact: <span className='text-sm font-medium'>{woner?.phoneNumber}</span></h2>
          </div>
          <div className='flex items-center gap-2'>
            <LuContactRound />
            <h2 className='font-semibold'>Contact-2: <span className='text-sm font-medium'>{woner?.extraNumber}</span></h2>
          </div>
          <div className='flex items-center gap-2'>
            <MdOutlineMail />
            <h2 className='font-semibold'>Email: <span className='text-sm font-medium'>{woner?.email}</span></h2>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default ContactPage