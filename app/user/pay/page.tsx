import { verifyToken } from '@/lib/session';
import prismaDB from '@/prisma/pot'
import { redirect } from 'next/navigation';
import React from 'react'

const PayBill = async () => {
  const token = await verifyToken();
  if (!token) {
    return redirect("/");
  }
  const user = await prismaDB.user.findUnique({
    where: { id: token.id as string}
  })
  const transaction = await prismaDB.transaction.findMany({
    where: { userName: user?.userName }
  })
  const rows = transaction.map( ( e, i) => (
    { id: i+1, name: e.userName, amout:e.amount, status:e.methordName, date:e.date.toDateString() }
  ))
  return (
    <div>
      <section className='text-gray-500 p-4'>
        <div className='p-4 bg-white shadow-lg rounded-lg'>
          <h1 className='text-lg font-semibold text-gray-400'>Current Plan</h1>
          <h2 className='text-sm font-semibold mt-2'>Your Current Play is {user?.interNetPackage} MBPS</h2>
          <h4 className='text-xs'>A simple Package for everyone</h4>

          <h2 className='text-sm font-semibold mt-2'>Active unite {user?.dateOfConnection.toDateString() as string}</h2>
          <h4 className='text-xs'>Pay before Subscription expire</h4>

          <button className='px-4 py-1 bg-sky-500 mt-3 rounded-sm shadow-sm text-white text-sm font-semibold'>Pay</button>
        </div>
      </section>

      <section className='w-full mt-4 px-4'>
        <table className="min-w-full border-collapse border border-[#FFFFFF] text-gray-500">
          <thead>
            <tr className="bg-[#FFFFFF]">
              <th className="border border-[#FFFFFF] px-4 py-2">INVOIVE NO:</th>
              <th className="border border-[#FFFFFF] px-4 py-2">USER NAME</th>
              <th className="border border-[#FFFFFF] px-4 py-2">AMMOUNT</th>
              <th className="border border-[#FFFFFF] px-4 py-2">DATE</th>
              <th className="border border-[#FFFFFF] px-4 py-2">Payment methord</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className='bg-[#60a4fd38] text-gray-900'>
                <td className="border border-[#FFFFFF] px-4 py-2">{row.id}</td>
                <td className="border border-[#FFFFFF] px-4 py-2">{row.name}</td>
                <td className="border border-[#FFFFFF] px-4 py-2">{row.amout}</td>
                <td className="border border-[#FFFFFF] px-4 py-2">{row.date}</td>
                <td className="border border-[#FFFFFF] px-4 py-2">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default PayBill