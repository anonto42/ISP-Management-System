import PaginationComponent from '@/components/paginate/Paginate'
import prismaDB from '@/prisma/pot';
import React from 'react'

interface paymentH{
  userName:string;
  amount:number;
  transactionType:string;
  puspes:string;
  date:string;
}


const page = async () => {
  const paymentHistory = await prismaDB.transaction.findMany();
  const data: paymentH[] = paymentHistory.map(data => ({
    userName: data.userName,
    amount: data.amount,
    transactionType: data.transactionType,
    puspes: data.puspes,
    date: new Date(data.date).toLocaleDateString()
}));

  return (
    <div>
      <section className='w-full max-w-[1600px] p-6 mx-auto'>
        <PaginationComponent<paymentH>
          addUserButton={false}
          paginateTitle='Billing'
          // add a get paymet resite layter
          action={{view:true,delete:true}}
          fields={["UserName","Amount","Methord Name","Puspes","Data"]}
          allData={data}
          key={"Billing"}
        />
      </section>
    </div>
  )
}

export default page