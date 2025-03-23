import AddInvoice from '@/components/paginate/AddInvoice';
import React from 'react'


interface transiction{
  id:string;
  amount:number;
  paymentType:string;
  date:string;
  stafName:string;
}

const transiction_history:transiction[] = [
  {
    id:"232",
    amount:1200,
    stafName:"Rafi islam",
    date:"10-01-2025",
    paymentType:"Montyly payment",
  },
  {
    id:"232",
    amount:1200,
    stafName:"Rafi islam",
    date:"10-01-2025",
    paymentType:"Montyly payment",
  },
  {
    id:"232",
    amount:1200,
    stafName:"Rafi islam",
    date:"10-01-2025",
    paymentType:"Montyly payment",
  },
  {
    id:"232",
    amount:1200,
    stafName:"Rafi islam",
    date:"10-01-2025",
    paymentType:"Montyly payment",
  },
  {
    id:"232",
    amount:1200,
    stafName:"Rafi islam",
    date:"10-01-2025",
    paymentType:"Montyly payment",
  },
  {
    id:"232",
    amount:1200,
    stafName:"Rafi islam",
    date:"10-01-2025",
    paymentType:"Montyly payment",
  },
  {
    id:"232",
    amount:1200,
    stafName:"Rafi islam",
    date:"10-01-2025",
    paymentType:"Montyly payment",
  },
  {
    id:"232",
    amount:1200,
    stafName:"Rafi islam",
    date:"10-01-2025",
    paymentType:"Montyly payment",
  },
  {
    id:"232",
    amount:1200,
    stafName:"Rafi islam",
    date:"10-01-2025",
    paymentType:"Montyly payment",
  },
  {
    id:"232",
    amount:1200,
    stafName:"Rafi islam",
    date:"10-01-2025",
    paymentType:"Montyly payment",
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
          fields={["ID","Amount","Full Name","Date","Payment Type"]}
          paginateTitle='Stuff Members Billings'
        />
      </section>
    </div>
  )
}

export default page