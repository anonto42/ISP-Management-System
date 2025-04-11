"use client"
import Loader from '@/components/loader/Loader';
import PaginationComponent from '@/components/paginate/Paginate';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

interface userI{
  name: string;
  password: string;
  profile: string;
  service: string;
}

const PaginateCo = () => {
  const [users,setUsers] = useState<userI[]>([]);
  const [loading,setLoading] = useState<boolean>(false);

  useEffect( () => {
    async function getData() {
      setLoading(true)
      try {
        const { data } = await axios.get("/api/active-users",{withCredentials:true})
        setUsers(data.data)
        toast.success(data.message)
        setLoading(false)
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error)
          toast.error(error.response?.data.message)
          setLoading(false)
        }
      }
    }
    getData()
  },[0])

  const filtredData = users?.map( user => ({
    userName: user.name,
    password: user.password,
    package: user.profile,
    service: user.service,
  }))

  console.log(filtredData)

  return (
    <section className='w-full max-w-[1600px] p-6 mx-auto'>
      {loading && <Loader />}
        <PaginationComponent
          paginateTitle='PPPoE Secrets'
          action={{view:true}}
          fields={["User Name","Password","Internet Package","Service"]}
          allData={filtredData}
          addUserButton
          key={"PPPoE"}
        />
      </section>
  )
}

export default PaginateCo