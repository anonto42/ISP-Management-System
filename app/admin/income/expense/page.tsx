import AddInvoice from '@/components/paginate/AddInvoice'
import prismaDB from '@/prisma/pot';
import React from 'react'

const paymentHistory = (await prismaDB.transaction.findMany()).filter( i => i.transactionType === "expense").map(data => ({
  userName: data.userName,
  amount: data.amount,
  transactionType: data.transactionType,
  puspes: data.puspes,
  date: new Date(data.date).toISOString().split("T")[0]
})).reverse();

const page = () => {
  return (
    <div className='w-full h-full'>
      <section className='w-full max-w-[1600px] p-6 relative'>
        <AddInvoice
          action={{delete:true}}
          addNewInvoice
          invoiceType='expense'
          allData={paymentHistory}
          fields={["User Name","Amount","Transaction Type","Purpes","Date"]}
          paginateTitle='Expense'
        />
      </section>
    </div>
  )
}

export default page