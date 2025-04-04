import PaginationComponent from '@/components/paginate/Paginate'
import React from 'react'

const page = () => {
  return (
    <div className='h-full w-full'>
      <section className='w-full max-w-[1600px] p-6 mx-auto'>
        <PaginationComponent
          paginateTitle='Live Connection report'
          action={{view:true}}
          fields={["ID","IP Address","Type","MAC","Uptime","Remark"]}
          allData={[]}
          addUserButton
          key={"All User"}
        />
      </section>
    </div>
  )
}

export default page