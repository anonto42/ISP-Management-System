import AddInvoice from '@/components/paginate/AddInvoice';
import React from 'react'


interface transiction{
  id:string;
  amount:number;
  typeOfPayment:string;
  date:string;
  createdBy:string;
}

const transiction_history:transiction[] = [
  {
    id:"232",
    amount:1200,
    typeOfPayment:"onu",
    date:"10-01-2025",
    createdBy:"shuvo",
  },
]


const page = () => {
  return (
    <div>
      <section className='w-full max-w-[1600px] p-6 relative'>
        <AddInvoice<transiction>
          action={{delete:true}}
          addNewInvoice
          allData={transiction_history}
          fields={["ID","Amount","Type of expense","Date","Created By"]}
          paginateTitle='Expense'
        />
      </section>
    </div>
  )
}

export default page