import React from 'react'
import PaginationComponent from '@/components/paginate/Paginate'
import User from './User'
import prismaDB from '@/prisma/pot';

type Props = {
    searchParams: { [key: string]: string };
  };

export async function UserAdimPage({ searchParams }:Props) {
    const  id  = await searchParams.id.toString().trim();
    let user 
    if (id) {
        const temp = await prismaDB.user.findUnique({where:{userName:id}})
        if (temp) {
            user = temp
        }else{
            user = undefined
        }
    }
    const userTransition = await prismaDB.transaction.findMany({where:{userName:user?.userName}});
    const history = userTransition.map(user => (
        {
            userName: user.userName,
            number: user.amount,
            transaction: user.methordName,
            date: new Date(user.date).toISOString().split('T')[0],
            id: user.id,
            modelName: "transaction"
        }
    ))
  return (
    <div className='p-6 relative w-full h-svh'>

        <User user={user} />

        <section className='max-w-[1600px] mx-auto mt-4'>
            <PaginationComponent
                action={{delete:true}}
                addUserButton={false}
                fields={["User Name","Amount","Transaction","Date"]}
                allData={history}
                paginateTitle='Invoices'
            />
        </section>

    </div>
  )
}

export default UserAdimPage