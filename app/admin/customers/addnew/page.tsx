import AddNewUser from '@/components/addClient/AddNewUser'
import prismaDB from '@/prisma/pot'
import React from 'react'

const page = async () => {
  const packagesFromDB = await prismaDB.packages.findMany();
  return (
    <div>
      <section className='w-full max-w-[1600px] p-6 mx-auto'>
        <AddNewUser packages={packagesFromDB} />
      </section>
    </div>
  )
}

export default page