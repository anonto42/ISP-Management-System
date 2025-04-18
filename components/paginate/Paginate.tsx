"use client";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import SingelShowItem from "./SingelShowItem";

export interface acction{
  delete?: boolean;
  edite?: boolean;
  view?: boolean;
  block?: boolean;
}

interface comonAttrivoutes{
  userName: string;
  id?: string;
}

interface props<T>{
  action:acction;
  paginateTitle:string;
  fields:string[];
  allData:T[];
  addUserButton:boolean;
  refresher?:Dispatch<SetStateAction<number>>;
}

const PaginationComponent = <T extends comonAttrivoutes>(
  { 
    refresher,
    paginateTitle,
    fields,
    action,
    allData,
    addUserButton
  }:props<T>) => {

  const [search, setSearch] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = allData.filter(user =>
    user.userName.toString().toLocaleLowerCase().includes(search.toString().toLowerCase())
  );

  // Get the current page's users based on itemsPerPage
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Handle page change (Next and Previous)
  const handleNext = () => {
    if (currentPage < Math.ceil(filteredUsers.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full min-w-[800px] bg-[#F7F7F7] text-black p-6 shadow-md">
        <div className="mb-4 flex w-full justify-between border-b border-[#d1d1d1b9]">
          <h1 className="font-semibold text-xl pb-2 mb-4 text-start">{paginateTitle}</h1>
            {
              addUserButton?<Link href={"/admin/customers/addnew"} >
              <button className="px-4 py-2 shadow rounded-lg bg-blue-600 font-semibold text-white">Add New User</button>
            </Link>:<></>
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
              placeholder="Search user by userName..."
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
            {currentUsers.map((user,index) => (
              <SingelShowItem<comonAttrivoutes>
                getRefresher={refresher}
                key={index}
                data={user} 
                collums={fields.length+1}
                acction={action}
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

export default PaginationComponent;
