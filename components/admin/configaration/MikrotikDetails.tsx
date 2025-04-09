import React from 'react'

const MikrotikDetails = () => {
  return (
    <div className='bg-[#ffffff] p-4 shadow-lg'>
          <h1 className="text-lg font-semibold border-b border-[#e2e2e2] pb-2 mb-4">Mikrotik Details</h1>
          <div className='grid grid-rows-4 gap-4'>
            <input 
              placeholder='IP'
              className='set_inp_' 
              type="text"
               />
              <input 
              placeholder='userName'
              className='set_inp_' 
              type="text" 
              />
              <input 
              placeholder='Password'
              className='set_inp_' 
              type="password"
              />
              <div className='flex justify-center'>
                <button className='py-2 px-4 shadow bg-green-700 font-semibold text-white'>Update</button>
              </div>
          </div>
        </div>
  )
}

export default MikrotikDetails