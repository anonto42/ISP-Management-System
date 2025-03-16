import NaveBar from '@/components/admin/NaveBar'
import SideBar from '@/components/admin/SideBar'
import React from 'react'

const AdminDeshboard = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <NaveBar/>
    </div>
  )
}

export default AdminDeshboard