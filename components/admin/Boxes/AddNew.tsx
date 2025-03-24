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