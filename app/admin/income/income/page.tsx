import AddInvoice from '@/components/paginate/AddInvoice'
import React from 'react'

interface transiction{
  id:string;
  amount:number;
  invoice_type:string;
  date:string;
  createdBy:string;
}

const transiction_history:transiction[] = [
  {
    id:"232",
    amount:1200,
    invoice_type:"New Connection",
    date:"10-01-2025",
    createdBy:"Shuvo"
  },
  {
    id:"232",
    amount:1200,
    invoice_type:"New Connection",
    date:"10-01-2025",
    createdBy:"Shuvo"
  },
  {
    id:"232",
    amount:1200,
    invoice_type:"New Connection",
    date:"10-01-2025",
    createdBy:"Shuvo"
  },
  {
    id:"232",
    amount:1200,
    invoice_type:"New Connection",
    date:"10-01-2025",
    createdBy:"Shuvo"
  },
  {
    id:"232",
    amount:1200,
    invoice_type:"New Connection",
    date:"10-01-2025",
    createdBy:"Shuvo"
  },
  {
    id:"232",
    amount:1200,
    invoice_type:"New Connection",
    date:"10-01-2025",
    createdBy:"Shuvo"
  },
  {
    id:"232",
    amount:1200,
    invoice_type:"New Connection",
    date:"10-01-2025",
    createdBy:"Shuvo"
  },
  {
    id:"232",
    amount:1200,
    invoice_type:"New Connection",
    date:"10-01-2025",
    createdBy:"Shuvo"
  },
  {
    id:"232",
    amount:1200,
    invoice_type:"New Connection",
    date:"10-01-2025",
    createdBy:"Shuvo"
  },
  {
    id:"232",
    amount:1200,
    invoice_type:"New Connection",
    date:"10-01-2025",
    createdBy:"Shuvo"
  },
]

const page = () => {
  return (
    <div className='w-full h-full'>
      <section className='w-full max-w-[1600px] p-6 relative'>
        <AddInvoice<transiction>
          action={{delete:true}}
          addNewInvoice
          allData={transiction_history}
          fields={["ID","Amount","Type Of Income","Date","Created By"]}
          paginateTitle='Income'
        />
      </section>
    </div>
  )
}

export default page