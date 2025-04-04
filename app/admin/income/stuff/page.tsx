import AddInvoice from '@/components/paginate/AddInvoice';
import React from 'react'



const page = () => {
  return (
    <div>
      <section className='w-full max-w-[1600px] p-6 relative'>
        <AddInvoice
          action={{delete:true}}
          addNewInvoice
          allData={[]}
          fields={["ID","Amount","Full Name","Date","Payment Type"]}
          paginateTitle='Stuff Members Billings'
        />
      </section>
    </div>
  )
}

export default page