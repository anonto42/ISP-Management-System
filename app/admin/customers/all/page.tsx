import PaginationComponent from '@/components/paginate/Paginate';
import prismaDB from '@/prisma/pot';
import React from 'react';


interface user{
  userName:string;
  password:string;
  mobile:string;
  clientInfo:string;
  expire:string;
}

const page = async () => {

  const allUser = await prismaDB.user.findMany();

  const formattedUsers:user[] = allUser.filter( doc => doc.userType !== "admin" ).map(user => ({
    userName: user.userName,
    password: user.password,
    mobile: user.phoneNumber,
    clientInfo: `${user.district}, ${user.upozala}`, // You can adjust this as needed
    expire:user.expireDate == null ? "0.0.0.0" :user.expireDate?.toLocaleDateString(), // Format the date as needed
  }));

  return (
    <div className='w-full h-full'>
      <section className='w-full max-w-[1600px] p-6 mx-auto'>
        <PaginationComponent<user>
          paginateTitle='All Customers'
          action={{view:true,delete:true,edite:true}}
          fields={["User Name","password","Mobile","Client Info","Expire"]}
          allData={formattedUsers}
          addUserButton
          key={"All cuntomers"}
        />
      </section>
    </div>
  )
}

export default page