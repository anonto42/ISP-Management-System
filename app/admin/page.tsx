import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { CiSquarePlus } from 
"react-icons/ci";
import { CiWifiOn } from "react-icons/ci";
import { TbUsersGroup } from "react-icons/tb";
import { TbCoinTaka } from "react-icons/tb";
import { RiWallet3Line } from "react-icons/ri";
import { CiServer } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { TbPackages } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import DeshboardInfoItem from '@/components/admin/Boxes/DeshboardInfoItem';
import Graph from '@/components/graph/Graph';
import SystemInfo from '@/components/admin/Boxes/SystemInfo';
import PaginationComponent from '@/components/paginate/Paginate';

export interface renderData{
  icon:IconType;
  title: string;
  count: number;
  iconColor: string;
  iconBoxColor: string;
}

const dataObject:renderData[] = [
  {
    icon:CiWifiOn,
    title:"Active User",
    count:2,
    iconColor:"#f77e05",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:TbUsersGroup,
    title:"Total Customers",
    count:2,
    iconColor:"#4ac900",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:TbCoinTaka,
    title:"Today's expense",
    count:0,
    iconColor:"#bf7300",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:RiWallet3Line,
    title:"Today's Income",
    count:1000,
    iconColor:"#4ac900",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:CiServer,
    title:"FTP Server",
    count:10,
    iconColor:"#4ac900",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:FiUsers,
    title:"Resellers",
    count:5,
    iconColor:"#cf0404",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:TbPackages,
    title:"Packages",
    count:2,
    iconColor:"#4ac900",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:IoDocumentTextOutline,
    title:"Invoice today",
    count:0,
    iconColor:"#f77e05",
    iconBoxColor:"#f5f3f0"
  },
]

interface user {
  id: string;
  name: string;
  userName:string;
  password:string;
  mobile:string;
  expire:string;
}

const usersData:user[] = [
  { id: "1", name: "John Doe", userName:"jodeo",password:"kddkss",mobile:"01990579274",expire:"10-02-2025" }, 
  { id: "2", name: "Sohidul islam", userName:"anonto",password:"anonto1212",mobile:"01990579274",expire:"10-02-2025" }, 
  { id: "3", name: "Jon kori", userName:"johan",password:"kddkss",mobile:"01990579274",expire:"10-02-2025"}, 
  { id: "4", name: "Pori moni", userName:"pori",password:"kddkss",mobile:"01990579274",expire:"10-02-2025"}, 
  { id: "5", name: "Jannat jannatul", userName:"jan12",password:"kddkss",mobile:"01990579274",expire:"10-02-2025" }, 
];

const AdminDeshboard = () => {
  return (
    <div className='w-full h-full text-white'>

      <section className='flex flex-col md:flex-row justify-between items-center py-4 w-full px-4 xl:mb-[40px]'>
        <div className='text-center md:text-start'>
          <h1 className='lg:text-3xl text-2xl font-semibold'>Deshboard</h1>
          <h4 className='lg:text-xl text-lg'>Welcome {" md: user name"}</h4>
        </div>
        <div>
          <Link href={""}>
            <button className='flex mt-4 lg:mt-0 items-center py-2 px-4 border gap-3 rounded-xl bg-[#0051ff23] shadow shadow-[#00000070] active:scale-95 duration-150 ease-in-out'>
              <CiSquarePlus/>
              <span>Add Customer</span>
            </button>
          </Link>
        </div>
      </section>

      <section className='w-full max-w-[1600px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          dataObject.map((item,index)=>(
            <DeshboardInfoItem data={item} key={index} />
          ))
        }
      </section>

      <section className='w-full max-w-[1600px] px-6 mx-auto mt-4 gap-4 grid grid-cols-1 lg:grid-cols-2'>
        <Graph/>
        <SystemInfo/>
      </section>

      <section className='w-full max-w-[1600px] px-6 mx-auto mt-4 pb-10'>
        <PaginationComponent<user>
          allData={usersData}
          action={{
            delete:true,
            edite: true
          }}
          paginateTitle='Bill paid today'
          fields={["User ID","Full name","User name","Password","Mobile","Expire"]}
        />
      </section>

    </div>
  )
}

export default AdminDeshboard