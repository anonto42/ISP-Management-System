import React from 'react'

const Auth = () => {
  return (
    <div className='w-full h-svh flex justify-center items-center'>
        <section className='py-11 px-6 rounded-xl bg-[#8290c0] shadow-md flex justify-center items-center'>
            <div className='w-full px-4'>
                <h1 className='font-bold text-[#04082c] text-center pb-5 text-2xl'>Login your accout</h1>
                <div className='inp-box-login'>
                    <input 
                        className='inp-login'
                        placeholder='User Name'    
                        type="text"
                        name=""
                    />
                </div>
                <div className='inp-box-login'>
                    <input 
                        className='inp-login'  
                        placeholder='Password'  
                        type="text"
                        name=""
                    />
                </div>
                <div className='flex justify-center'>
                    <button className='btn'>Login</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Auth