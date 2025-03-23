import PaginationComponent from '@/components/paginate/Paginate';
import React from 'react';


interface transtion{
  id:string;
  amount:string;
  transactionId:string;
  mobile:string;
  userID:string;
  payWith:string;
  Date:string;
}

const allTranstion:transtion[] = [
    {
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },{
        id:"233",
        amount:"23333",
        transactionId:"slkdie",
        mobile:"02939392039",
        userID:"jsud2333",
        payWith:"Bkash",
        Date:"20-03-2034"
    },
]

const page = () => {

  return (
    <div className='w-full h-full'>
      <section className='w-full max-w-[1600px] p-6 mx-auto'>
        <PaginationComponent<transtion>
          paginateTitle='Live Connection report'
          action={{delete:true}}
          fields={["ID","Amount","Transaction ID","Mobile","User ID","Pay-by","Date"]}
          addUserButton={false}
          allData={allTranstion}
        />
      </section>
    </div>
  )
}

export default page