import PaginationComponent from '@/components/paginate/Paginate';
import prismaDB from '@/prisma/pot';
import React from 'react';


const page = async () => {
  
  const users = await prismaDB.user.findMany();
  const resellers = users.filter( user => user.userType === "reseller").map(user => ({
    userName: user.userName,
    mobile: user.phoneNumber,
    email: user.email,
    modelName:"user",
    id:user.id,
    balance: user.balance,
    joiningDate: new Date(user.dateOfConnection).toISOString().split("T")[0]
  }))

  return (
    <div className='w-full h-full'>
      <section className='w-full max-w-[1600px] p-6 mx-auto'>
        <PaginationComponent
          paginateTitle='All Reseller'
          action={{delete:true,edite:true}}
          fields={["User name","Mobile","Email","Balance","Joining Date"]}
          addUserButton={false}
          allData={resellers}
        />
      </section>
    </div>
  )
}

export default page