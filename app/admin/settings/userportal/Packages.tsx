"use client"
import Loader from '@/components/loader/Loader'
import PaginationComponent from '@/components/paginate/Paginate'
import { Packages as dbPackage } from '@prisma/client'
import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


const Packages = () => {
    const [counter,setCounter] = useState<number>(0);
    const [loading,setLoading] = useState<boolean>(false);
    const [currentData,setData] = useState<dbPackage[]>();

    useEffect(()=>{
        const fetchData = async () => {
            try {
                setLoading(true);

                const { data } = await axios.post(`/api/oparation`,{schemaName:"packages"},{withCredentials:true});
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

    const formattedUsers = currentData?.map(user => ({
        id: user.id,
        userName: user.title,
        price: user.price,
        mbps: user.mbps,
        modelName: "packages"
      }))

  return (
    <section className='w-full max-w-[1600px] p-6 mx-auto'>
        {loading && <Loader />}
        <PaginationComponent
          paginateTitle='All Packages'
          action={{delete:true}}
          fields={["Title","Price","MBPS"]}
          allData={formattedUsers || []}
          addUserButton={false}
          refresher={setCounter}
          key={"All Packages"}
        />
      </section>
  )
}

export default Packages