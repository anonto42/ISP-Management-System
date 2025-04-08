"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import SingelShowItem from "./SingelShowItem";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";

export interface acction{
  delete?: boolean;
  edite?: boolean;
  view?: boolean;
  block?: boolean;
}

interface comonAttrivoutes{
  id?: string;
  userName: string
}

interface props<T>{
  action:acction;
  paginateTitle:string;
  fields:string[];
  allData:T[];
  addNewInvoice:boolean;
  invoiceType?:"income" | "expense";
  refresh?: Dispatch<SetStateAction<number>>
}

const AddInvoice = <T extends comonAttrivoutes>(
  {
    paginateTitle,
    fields,
    action,
    allData,
    addNewInvoice,
    invoiceType = "income",
    refresh
  }:props<T>) => {

  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const [addNew,setAddNew] = useState<boolean>(false);

  const filteredUsers = allData.filter(user =>
    user.userName.toString().toLocaleLowerCase().includes(search.toString().toLowerCase())
  );

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleNext = ():void => {
    if (currentPage < Math.ceil(filteredUsers.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = ():void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const addNewIncome = async ()=> {
    try {
        setAddNew(true);
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="w-full overflow-x-auto">
    { addNew && <AddNewCount setRefresh={refresh} invoiceType={invoiceType} setAddComponent={setAddNew} /> }
      <div className="w-full min-w-[800px] bg-[#EFECEC] text-black p-6 shadow-md">
        <div className="mb-4 flex w-full justify-between border-b border-[#d1d1d1b9]">
          <h1 className="font-semibold text-xl pb-2 mb-4 text-start">{paginateTitle}</h1>
            {
              addNewInvoice?<div>
                <button 
                    onClick={()=>addNewIncome()}
                    className="px-4 py-2 shadow rounded-lg bg-blue-600 font-semibold text-white active:scale-95 duration-100 ease-linear">Add New</button>
            </div>:<></>
            }
          </div>
          

        <div className="flex justify-between items-center mb-4 gap-4">

          <div>
            <input
              type="number"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              min="1"
              max="10"
              className="p-2 outline-non rounded-lg text-center w-12 bg-[white] shadow"
            />
            <span className="ml-2 text-sm">items per page</span>
          </div>

          <div>
            <span className="mr-2 text-sm">Search:</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by userName."
              className="p-2 outline-none rounded-lg bg-[white] shadow"
            />
          </div>

        </div>

        {/* Section 3: Pagination and Users */}
        <section className="space-y-3">
          <div>

          <div 
            className={`grid border-b border-[#d1d1d1b9] pb-2 mb-4 px-3`}
            style={{gridTemplateColumns: `repeat(${fields.length+1}, 1fr)`}}
          >
            {
              fields.map((item, index) => (
                <h2 
                  key={index} 
                  className="font-semibold">
                  {item}
                </h2>
              ))
            }
            <h2 className="font-semibold">{"Action"}</h2>
          </div>
            {currentUsers.map((user,index) => (<SingelShowItem
                key={index}
                data={user} 
                collums={fields.length+1}
                acction={action}
                getRefresher={refresh}
            />))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-300 text-black rounded-lg"
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div className="text-sm text-gray-600">
              Page {currentPage} of {Math.ceil(filteredUsers.length / itemsPerPage)}
            </div>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-300 text-black rounded-lg"
              disabled={currentPage === Math.ceil(filteredUsers.length / itemsPerPage)}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddInvoice;


export function AddNewCount({
    invoiceType,
    setAddComponent,
    setRefresh
}:{
    setAddComponent: React.Dispatch<SetStateAction<boolean>>,
    setRefresh?: React.Dispatch<SetStateAction<number>>,
    invoiceType: "income" | "expense"
}) {
  const [amout,setAmount] = useState<string>();
  const [purpus,setPurpus] = useState<string>();
  const [date,setDate] = useState<string>();
  const [userName,setUserName] = useState<string>();
  const [receved,setReceved] = useState<string>();
  const [loading,setLoading] = useState<boolean>(false);

  const handerUpload = async () => {
    if (invoiceType === "income") {
      try {
        setLoading(true);
  
        const income_data = {
          amount:Number(amout), 
          type:"income", 
          purpes:purpus, 
          date: date,
          userName:userName,
          receved
        }
  
        const { data } = await axios.post("/api/transection",income_data);
        
        setLoading(false);
  
        toast.success(data.message);
        setAddComponent(false);

        if(setRefresh){
          setRefresh(prevCount => {
              const newCount = prevCount + 2;
              setRefresh(newCount + 1); // Update based on new count value
              return newCount;
            })
      }
  
      } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
            toast.error(`${error.response?.data?.message}`);
            console.log(error.response);
        } else {
            console.error("An unknown error occurred:", error);
        }
        setLoading(false);
      }
    }else{
      try {
        setLoading(true);
  
        const income_data = {
          amount:Number(amout), 
          type:"expense", 
          purpes:purpus, 
          date: date,
          userName:userName,
          receved
        }
  
        const { data } = await axios.post("/api/transection",income_data);
        
        setLoading(false);
  
        toast.success(data.message);
        setAddComponent(false);
  
      } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) {
            toast.error(`${error.response?.data?.message}`);
            console.log(error.response);
        } else {
            console.error("An unknown error occurred:", error);
        }
        setLoading(false);
      }
    }
  }

    return(
        <div className="absolute top-[100%] left-1/2 transform -translate-y-1/2 -translate-x-[50%] shadow-[#0000005d] shadow-[0px_0px_60px] bg-[#ffffff] rounded-xl sm:w-[600px] md:min-w-[450px] max-w-[700px]">
          { loading && <Loader />}
            <div className="p-4 w-full h-full">
                <h1
                    className="text-xl font-semibold border-b border-[#e2e2e2] pb-2"
                >Add new</h1>
                <div className="grid gap-4 py-4 max-w-[500px] mx-auto">
                    <div className="add_item_inp_box">
                        <h3 className="">Amount (Taka)</h3>
                        <input
                            value={amout}
                            onChange={ e => setAmount(e.target.value)}
                            className="add_item_inp" 
                            type="text" />
                    </div>
                    <div className="add_item_inp_box">
                        <h3 className="">Type of transaction</h3>
                        <input
                            value={purpus}
                            onChange={ e => setPurpus(e.target.value)}
                            className="add_item_inp" 
                            type="text" />
                    </div>
                    <div className="add_item_inp_box">
                        <h3 className="">User Name</h3>
                        <input
                            value={userName}
                            onChange={ e => setUserName(e.target.value)}
                            className="add_item_inp" 
                            type="text" />
                    </div>
                    <div className="add_item_inp_box">
                        <h3 className="">Payment Methord</h3>
                        <input
                            value={receved}
                            onChange={ e => setReceved(e.target.value)}
                            className="add_item_inp" 
                            type="text" />
                    </div>
                    <div className="add_item_inp_box">
                        <h3 className="mr-2">Payment date</h3>
                        <input
                            onChange={ e => setDate(e.target.value)}
                            className="add_item_inp" 
                            type="date" />
                    </div>
                </div>
                <div className="flex justify-around mt-3">
                    <button 
                        onClick={()=>setAddComponent(false)}
                        className="_btn_ bg-red-200 text-red-700 rounded-sm">Close</button>
                    <button 
                      onClick={()=>handerUpload()}
                      className="_btn_ bg-green-700 text-white rounded-sm">Submit</button>    
                </div>
            </div>
        </div>
    )
}