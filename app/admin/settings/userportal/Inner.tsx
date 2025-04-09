"use client"
import { AddSection } from "@/components/admin/Boxes/AddNew"
import { useEffect, useState } from "react"
import axios from "axios";
import { Servers } from "@prisma/client";
import Loader from "@/components/loader/Loader";
import { toast } from "react-toastify";

interface server {
  name: string;
  link: string;
  id: string;
  modelName: string;
}

function Inner(
) {
  const [addNew, setAddNew] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [serverData, setServerData] = useState<Servers[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function dataFetch() {
      try {
        setLoading(true);
        const response = await axios.post(`/api/oparation`, { schemaName: "servers" }, { withCredentials: true });
        setServerData(response.data.data)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    dataFetch();
  }, [counter])

  const serverInfo:server[] | undefined = serverData?.map(server => (
    {
      name: server.name,
      link: server.url,
      id: server.id,
      modelName: "servers"
    }
  ))

  const handelDelete = async (data: server) => {
    try {
      setLoading(true);
      if (!data.id) {
        return (
          toast.info(`${data.id}`),
          toast.error("Id is required to delete info!"),
          setLoading(false)
        )
      }

      const axiosData = await axios.post("/api/universel", { id: data.id, modelName: data.modelName }, { withCredentials: true });

      setCounter(prevCount => {
        const newCount = prevCount + 2;
        setCounter(newCount + 1);
        return newCount;
      }) 

      toast.success(`${axiosData.data.message}`)
      setLoading(false)


    } catch (error) {
      console.log("this is the error from promis: " + error)
      toast.error("Failed to delete Server!")
      setLoading(false);
    }
  }


  return (
    <div className="px-6 pt-6">
      {loading && <Loader />}
      {addNew && <AddSection setRefresh={setCounter} addNew={setAddNew} />}
      <section className='mx-auto max-w-[1600px] min-w-[700px] overflow-x-auto p-6 bg-[white] shadow-md'>
        <div className='border-b border-[#cacaca] py-2 flex justify-between items-center'>
          <h1 className='text-xl'>
            FTP
          </h1>
          <button onClick={() => setAddNew(!addNew)} className='px-4 py-2 bg-green-600 font-semibold text-white'>Add new</button>
        </div>

        <div className='mt-3'>
          <h2 className='text-lg'>Existing:</h2>
          {
            (serverInfo || []).map((item, index) => {
              return (
                <div key={index} className='mt-3 bg-[#f0f2f7] px-4 py-2 flex justify-between items-center'>
                  <h1 className='text-lg'>Server Name: <span className='italic font-bold'>{item.name}</span></h1>
                  <button
                    onClick={() => handelDelete(item)}
                    className='px-4 py-2 ease-linear duration-150 active:scale-95 bg-red-200 text-red-600 rounded-md shadow-sm'>Delete</button>
                  <h1 className='text-lg'>Server Link: <span className='italic font-bold'>{item.link}</span></h1>
                </div>
              )
            })
          }
        </div>

      </section>
    </div>
  )
}

export default Inner