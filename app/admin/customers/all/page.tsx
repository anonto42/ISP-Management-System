import PaginationComponent from '@/components/paginate/Paginate';
import React from 'react';


interface user{
  id:string;
  userName:string;
  password:string;
  mobile:string;
  clientInfo:string;
  expire:string;
}

const allUser:user[] = [
  {
    id:"213213kk",
    userName:"sakin24",
    password:"skslks",
    mobile:"010929920019",
    clientInfo:"Skaliblul isllam",
    expire:"10-10-2025",
  },
  {
    id:"213213kk",
    userName:"sakin24",
    password:"skslks",
    mobile:"010929920019",
    clientInfo:"Skaliblul isllam",
    expire:"10-10-2025",
  },
  {
    id:"213213kk",
    userName:"sakin24",
    password:"skslks",
    mobile:"010929920019",
    clientInfo:"Skaliblul isllam",
    expire:"10-10-2025",
  },
  {
    id:"213213kk",
    userName:"sakin24",
    password:"skslks",
    mobile:"010929920019",
    clientInfo:"Skaliblul isllam",
    expire:"10-10-2025",
  },
  {
    id:"213213kk",
    userName:"sakin24",
    password:"skslks",
    mobile:"010929920019",
    clientInfo:"Skaliblul isllam",
    expire:"10-10-2025",
  },
  {
    id:"213213kk",
    userName:"sakin24",
    password:"skslks",
    mobile:"010929920019",
    clientInfo:"Skaliblul isllam",
    expire:"10-10-2025",
  },
  {
    id:"213213kk",
    userName:"sakin24",
    password:"skslks",
    mobile:"010929920019",
    clientInfo:"Skaliblul isllam",
    expire:"10-10-2025",
  },
  {
    id:"213213kk",
    userName:"sakin24",
    password:"skslks",
    mobile:"010929920019",
    clientInfo:"Skaliblul isllam",
    expire:"10-10-2025",
  },
  {
    id:"213213kk",
    userName:"sakin24",
    password:"skslks",
    mobile:"010929920019",
    clientInfo:"Skaliblul isllam",
    expire:"10-10-2025",
  },
  
]

const page = () => {

  return (
    <div className='w-full h-full'>
      <section className='w-full max-w-[1600px] p-6 mx-auto'>
        <PaginationComponent<user>
          paginateTitle='Live Connection report'
          action={{view:true,delete:true,edite:true}}
          fields={["User ID","User Name","password","Mobile","Client Info","Expire"]}
          allData={allUser}
        />
      </section>
    </div>
  )
}

export default page