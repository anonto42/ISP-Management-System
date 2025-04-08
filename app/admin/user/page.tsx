"use client"
import React, { useEffect, useState } from 'react'
import User from './User'
import PaginationComponent from '@/components/paginate/Paginate'
import { Transaction, User as user } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';


export default function UserAdimPage() {
  const [getHistory,setHistory] = useState<Transaction[]>();
  const params = useSearchParams();
  const user_id = params.get('id');
  const [user,setUser] = useState<user>();
  const [loading,setLoading] = useState<boolean>(true); 
  const [refreshOn, setCounter] = useState<number>(0);

  useEffect(()=>{
    const fetchUser = async () => {
      try {
          const { data } = await axios.post(`/api/universel/info`,{user_id},{withCredentials:true});
          setUser(data.user);
          const response = await axios.post(`/api/universel/info/history`,{userName: user_id as string },{withCredentials:true});
          setHistory(response.data.history);
          setLoading(false);

      } catch (error) {
          if(error instanceof AxiosError){
              toast.error("Error fetching user data")
          }
          setHistory(
            [{
              id: "",
              userName: "o001",
              methordName: "Bkash",
              amount: 2000,
              transactionType: "income",
              puspes: "Mounthly bill",
              date: new Date("2025-04-04T16:26:59.987Z")
            }]
          )
          setUser(
            {
              id: "",
              fullName: " ",
              email: "@.com",
              phoneNumber: "",
              extraNumber: "",
              nid: "",
              district: "",
              upozala: "",
              area: "",
              houseNo: "",
              floorNo: "",
              connectivityType: "",
              wireCode: "",
              wireType: "",
              userName: "",
              password: "",
              referral: "",
              reseller: "",
              securityDeposit: "0000",
              picture: "https://cdn.pixabay.com/photo/2013/07/13/12/33/man-159847_640.png",
              dateOfConnection: new Date(),
              interNetPackage: "",
              userType: "",
              balance: "",
              expireDate: new Date()
            }
          )
          setLoading(false)
      }
  }
  fetchUser()
  },[refreshOn,user_id])

 
  const history = getHistory?.map((user) => ({
    userName: user.userName,
    number: user.amount,
    transaction: user.methordName,
    date: new Date(user.date).toISOString().split('T')[0],
    id: user.id,
    modelName: 'transaction',
  }))

  return (
    <div className='p-6 relative w-full h-svh'>
      <User loading={loading} user={user!} setResresh={setCounter} />
      <section className='max-w-[1600px] mx-auto mt-4'>
        <PaginationComponent
          refresher={setCounter}
          action={{ delete: true }}
          addUserButton={false}
          fields={['User Name', 'Amount', 'Transaction', 'Date']}
          allData={history|| []}
          paginateTitle='Invoices'
        />
      </section>
    </div>
  )
}
