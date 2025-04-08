"use client"
import Loader from '@/components/loader/Loader'
import AddInvoice from '@/components/paginate/AddInvoice'
import { Transaction } from '@prisma/client'
import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


const IncomeSection = () => {
    const [counter,setCounter] = useState<number>(0);
    const [loading,setLoading] = useState<boolean>(false);
    const [currentData,setData] = useState<Transaction[]>();

    useEffect(()=>{
        const fetchData = async () => {
            try {
                setLoading(true);

                const { data } = await axios.post(`/api/oparation`,{schemaName:"transaction"},{withCredentials:true});
                setData(data.data);
                setLoading(false);
      
            } catch (error) {
                if(error instanceof AxiosError){
                    toast.error("Error fetching user data")
                }
            }
        }
        fetchData();
    },[counter]);

      const paymentHistory = currentData?.filter( i => i.transactionType === "income").map(data => ({
        userName: data.userName,
        amount: data.amount,
        transactionType: data.transactionType,
        puspes: data.puspes,
        modelName:"transaction",
        id:data.id,
        date: new Date(data?.date).toISOString().split('T')[0]
      })).reverse();
      

  return (
    <section className='w-full max-w-[1600px] p-6 relative'>
        {loading && <Loader />}
        <AddInvoice
          action={{delete:true}}
          addNewInvoice
          allData={paymentHistory || []}
          fields={["User Name","Amount","Transaction Type","Purpes","Date"]}
          paginateTitle='Income'
          refresh={setCounter}
        />
      </section>
  )
}

export default IncomeSection