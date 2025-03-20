import { renderData } from '@/app/admin/page'
import React from 'react'

const DeshboardInfoItem = ({data}:{data:renderData}) => {
  return (
    <div className='p-6 w-auto h-auto bg-[#efecec] text-black shadow-md'>
        <div className='flex gap-4 items-center'>
            <div
                style={{
                    backgroundColor: data.iconBoxColor
                }} 
                className='w-14 h-14 flex items-center justify-center shadow-sm rounded-sm'> 
                <data.icon
                    style={{
                        color: data.iconColor
                    }} 
                    className={`text-3xl`} />
            </div>
            <div className=''>
                <h4 className='font-light'>{data.title}</h4>
                <h2 className='text-xl font-semibold'>{data.count}</h2>
            </div>
        </div>
    </div>
  )
}

export default DeshboardInfoItem