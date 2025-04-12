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
import prismaDB from '@/prisma/pot';
import { verifyToken } from '@/lib/session';

export interface renderData{
  icon:IconType;
  title: string;
  count: number;
  iconColor: string;
  iconBoxColor: string;
}

const AdminDeshboard = async () => {
  const accounts = await prismaDB.user.findMany();
  const FTP = await prismaDB.servers.findMany();
  const packages = await prismaDB.packages.findMany();
  const currentUser = await verifyToken();

  const paymentHistory = (await prismaDB.transaction.findMany()).map(data => ({
    userName: data.userName,
    amount: data.amount,
    transactionType: data.transactionType,
    puspes: data.puspes,
    date: new Date(data.date).toISOString().split("T")[0]
  }));

  const today = new Date().toISOString().split("T")[0];

  const admin = currentUser? accounts.filter( accounts => accounts.id === currentUser.id )[0] : [][0]
  const customers = accounts.filter( doc => doc.userType !== "admin" );
  const resellersCount = accounts.filter(user => user.userType === "reseller");

  const expens = paymentHistory
  .filter(doc => doc.transactionType === "expense" && doc.date === today)
  .reduce((sum, doc) => sum + doc.amount, 0);

  const income = paymentHistory
  .filter(doc => doc.transactionType === "income" && doc.date === today)
  .reduce((sum, doc) => sum + doc.amount, 0);

  const toDaysAllTranscictions = paymentHistory.filter( doc => new Date(doc.date).toISOString().split("T")[0] === today );

  const dataObject:renderData[] = [
  {
    icon:CiWifiOn,
    title:"Active User",
    count:0,
    iconColor:"#f77e05",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:TbUsersGroup,
    title:"Total Customers",
    count:customers.length,
    iconColor:"#4ac900",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:TbCoinTaka,
    title:"Today's expense",
    count:expens,
    iconColor:"#bf7300",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:RiWallet3Line,
    title:"Today's Income",
    count:income,
    iconColor:"#4ac900",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:CiServer,
    title:"FTP Server",
    count:FTP.length,
    iconColor:"#4ac900",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:FiUsers,
    title:"Resellers",
    count:resellersCount.length,
    iconColor:"#cf0404",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:TbPackages,
    title:"Packages",
    count:packages.length,
    iconColor:"#4ac900",
    iconBoxColor:"#f5f3f0"
  },
  {
    icon:IoDocumentTextOutline,
    title:"Invoice today",
    count:toDaysAllTranscictions.length,
    iconColor:"#f77e05",
    iconBoxColor:"#f5f3f0"
  },
  ]


  return (
    <div className='w-full h-full text-white'>

      <section className='flex flex-col md:flex-row justify-between items-center py-4 w-full px-4 xl:mb-[40px]'>
        <div className='text-center md:text-start'>
          <h1 className='lg:text-3xl text-2xl font-semibold'>Deshboard</h1>
          <h4 className='lg:text-xl text-lg'>Welcome {admin.fullName}</h4>
        </div>
        <div>
          <Link href={"/admin/customers/addnew"}>
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
        <PaginationComponent
          allData={toDaysAllTranscictions}
          action={{
            delete:true
          }}
          paginateTitle='Bill paid today'
          fields={["UserName","Amount","Methord Name","Puspes","Data"]}
          addUserButton={false}
          key={"Deshboard for admin main home page"}
        />
      </section>

    </div>
  )
}

export default AdminDeshboard