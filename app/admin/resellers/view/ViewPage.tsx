"use client"
import Loader from '@/components/loader/Loader'
import PaginationComponent from '@/components/paginate/Paginate'
import { User } from '@prisma/client'
import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


const ViewSection = () => {
    const [counter,setCounter] = useState<number>(0);
    const [loading,setLoading] = useState<boolean>(false);
    const [currentData,setData] = useState<User[]>();

    useEffect(()=>{
        const fetchData = async () => {
            try {
                setLoading(true);

                const { data } = await axios.post(`/api/oparation`,{schemaName:"user"},{withCredentials:true});
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

      const resellers = currentData?.filter( user => user.userType === "reseller").map(user => ({
        userName: user.userName,
        mobile: user.phoneNumber,
        email: user.email,
        modelName:"user",
        id:user.id,
        balance: user.balance,
        joiningDate: new Date(user.dateOfConnection).toISOString().split("T")[0]
      }))
      

  return (
    <section className='w-full max-w-[1600px] p-6 mx-auto'>
        { loading && <Loader /> }
        <PaginationComponent
          paginateTitle='All Reseller'
          action={{delete:true}}
          fields={["User name","Mobile","Email","Balance","Joining Date"]}
          addUserButton={false}
          allData={resellers || []}
          refresher={setCounter}
        />
    </section>
  )
}

export default ViewSection