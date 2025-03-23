import React from 'react'

const page = () => {
  return (
    <div>
      <section className='w-full h-full'>
        <div className='w-full mx-auto max-w-[700px] bg-[#f5f7ff] shadow-lg p-6 mt-6 rounded-lg'>
          <h1 className="text-xl font-semibold border-b border-[#e2e2e2] pb-2">Add new Top-Up</h1>
          <div className="grid gap-4 py-4 max-w-[500px] mx-auto">
            <div className="add_item_inp_box">
                <h3 className="">Select Reseller</h3>
                <input
                    className="add_item_inp" 
                    type="text" />
            </div>
            <div className="add_item_inp_box">
                <h3 className="">Amount (Taka)</h3>
                <input
                    className="add_item_inp" 
                    type="text" />
            </div>
            <div className="add_item_inp_box">
                <h3 className="mr-2">Payment date</h3>
                <input
                    className="add_item_inp" 
                    type="date" />
            </div>
          </div>
          <div className="flex justify-around mt-3">
              <button
                  className="_btn_ bg-red-200 text-red-700 rounded-sm">Close</button>
              <button className="_btn_ bg-green-700 text-white rounded-sm">Top-Up</button>    
          </div>
        </div>
      </section>
    </div>
  )
}

export default page