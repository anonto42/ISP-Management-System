import PaginationComponent from '@/components/paginate/Paginate';
import React from 'react';


interface reseller{
  id:string;
  fullName:string;
  mobile:string;
  email:string;
  balance:string;
  joiningData:string
}

const allResellers:reseller[] = [
  {
    id:"23k",
    fullName:"Md Sofiyou islam",
    mobile:"02093939",
    email:"sofisds323@gmail.com",
    balance:"023993 Taka",
    joiningData:"01-12-2023"
  },
  {
    id:"23k",
    fullName:"Md Sofiyou islam",
    mobile:"02093939",
    email:"sofisds323@gmail.com",
    balance:"023993 Taka",
    joiningData:"01-12-2023"
  }, {
    id:"23k",
    fullName:"Md Sofiyou islam",
    mobile:"02093939",
    email:"sofisds323@gmail.com",
    balance:"023993 Taka",
    joiningData:"01-12-2023"
  }, {
    id:"23k",
    fullName:"Md Sofiyou islam",
    mobile:"02093939",
    email:"sofisds323@gmail.com",
    balance:"023993 Taka",
    joiningData:"01-12-2023"
  }
]

const page = () => {

  return (
    <div className='w-full h-full'>
      <section className='w-full max-w-[1600px] p-6 mx-auto'>
        <PaginationComponent<reseller>
          paginateTitle='All Reseller'
          action={{delete:true,edite:true}}
          fields={["User ID","Full name","Mobile","Email","Balance","Joining Date"]}
          addUserButton={false}
          allData={allResellers}
        />
      </section>
    </div>
  )
}

export default page