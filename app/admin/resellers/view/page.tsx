import PaginationComponent from '@/components/paginate/Paginate';
import React from 'react';


const page = () => {

  return (
    <div className='w-full h-full'>
      <section className='w-full max-w-[1600px] p-6 mx-auto'>
        <PaginationComponent
          paginateTitle='All Reseller'
          action={{delete:true,edite:true}}
          fields={["User ID","Full name","Mobile","Email","Balance","Joining Date"]}
          addUserButton={false}
          allData={[]}
        />
      </section>
    </div>
  )
}

export default page