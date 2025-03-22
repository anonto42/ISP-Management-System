import React from 'react'

const AddNewUser = () => {
  return (
    <div className='w-full h-full bg-[#EFECEC] p-6 shadow-lg'>
        <h1 className='text-lg font-semibold border-b pb-4 border-[#b3b3b3]'>{"Add New Customer"}</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4'>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Uniqe ID</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Full Name</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Email</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Phone</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Extra Number</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>NID</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>District</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Upozala</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Area</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>House No</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Floor</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>UserName</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Password</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Connection date</h4>
                <input
                    className='input-newCustomer' 
                    type="date" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Type of connectivity</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>change</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Package</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Remark</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Wire-Code</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Wire-Type</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>ReSeller</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Security Deposit</h4>
                <input
                    placeholder='Write...'
                    className='input-newCustomer' 
                    type="text" />
            </div>
            <div className='input-box-newCustomer'>
                <h4 className='lavel_for_Input'>Picture</h4>
                <input
                    placeholder=''
                    className='input-newCustomer' 
                    type="file" />
            </div>
        </div>
        <div className='w-full flex justify-center'>
            <button className='px-3 py-2 bg-green-700 text-lg font-semibold text-white mt-4 shadow-lg active:scale-95 active:bg-green-600 duration-150 ease-linear'>Create User</button>
        </div>
    </div>
  )
}

export default AddNewUser