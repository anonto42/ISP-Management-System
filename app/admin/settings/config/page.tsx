import AdminDetails from '@/components/admin/configaration/AdminDetails'
import CompanyDetails from '@/components/admin/configaration/CompanyDetails'
import ManagePackages from '@/components/admin/configaration/ManagePackages'
import MikrotikDetails from '@/components/admin/configaration/MikrotikDetails'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className='grid grid-cols-1 md:grid-cols-2 max-w-[1600px] mx-auto p-6 gap-4'>
        <CompanyDetails />
        <AdminDetails />
        <MikrotikDetails />
        <ManagePackages />
      </section>
    </div>
  )
}

export default page