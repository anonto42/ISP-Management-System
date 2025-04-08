"use client"
import Loader from '@/components/loader/Loader'
import PaginationComponent from '@/components/paginate/Paginate'
import { User } from '@prisma/client'
import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


const Section = () => {
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

    const formattedUsers = currentData?.filter( doc => doc.userType !== "admin" ).map(user => ({
        id: user.id,
        userName: user.userName,
        password: user.password,
        mobile: user.phoneNumber,
        modelName: "user",
        clientInfo: `${user.district}, ${user.upozala}`,
        expire:user.expireDate == undefined ? "0.0.0.0" : new Date(user.expireDate).toISOString().split('T')[0],
      }));

  return (
    <section className='w-full max-w-[1600px] p-6 mx-auto'>
        {loading && <Loader />}
        <PaginationComponent
          paginateTitle='All Customers'
          action={{view:true,delete:true,edite:true}}
          fields={["User Name","password","Mobile","Client Info","Expire"]}
          allData={formattedUsers || []}
          addUserButton
          refresher={setCounter}
          key={"All cuntomers"}
        />
      </section>
  )
}

export default Section