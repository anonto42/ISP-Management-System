import PaginationComponent from '@/components/paginate/Paginate';
import React from 'react';

interface PPPoE_Secrets{
  id: string;
  userName: string;
  password: string;
  service: string;
  package: string;
  lastLogedOut: number;
}

const userPPPoE:PPPoE_Secrets[]=[
  {
    id: "1212",
    userName: "Sohidul",
    password: "lskdisdof",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "1222",
    userName: "kamlur",
    password: "lsksaddof",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "12121",
    userName: "sajin",
    password: "Sdddd",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "1111",
    userName: "jisan",
    password: "lerrrrsdof",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "13332",
    userName: "kasim",
    password: "lssdof",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "13412",
    userName: "safi",
    password: "aslkdd",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "1111",
    userName: "jisan",
    password: "lerrrrsdof",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "13332",
    userName: "kasim",
    password: "lssdof",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "13412",
    userName: "safi",
    password: "aslkdd",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "1111",
    userName: "jisan",
    password: "lerrrrsdof",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "13332",
    userName: "kasim",
    password: "lssdof",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "13412",
    userName: "safi",
    password: "aslkdd",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "1111",
    userName: "jisan",
    password: "lerrrrsdof",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "13332",
    userName: "kasim",
    password: "lssdof",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
  {
    id: "13412",
    userName: "safi",
    password: "aslkdd",
    service: "pppoe",
    package: "5 MB.s",
    lastLogedOut: Math.floor(Math.random() * 1000)
  },
]

const page = () => {
  return (
    <div>
      <section className='w-full max-w-[1600px] p-6 mx-auto'>
        <PaginationComponent<PPPoE_Secrets>
          paginateTitle='PPPoE Secrets'
          action={{view:true}}
          fields={["ID","IP Address","Type","MAC","Uptime","Remark"]}
          allData={userPPPoE}
        />
      </section>
    </div>
  )
}

export default page