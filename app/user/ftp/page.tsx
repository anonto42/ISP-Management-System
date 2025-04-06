import prismaDB from '@/prisma/pot'
import React from 'react'

const FtpServers = async() => {
  const server = await prismaDB.servers.findMany();
  const ftp = server.map(server => (
    {name:server.name,link:server.url,status:server.status}
  ));
  return (
    <div className='p-4'>
      <section className='bg-white shadow-lg rounded-lg p-3'>
        <h2 className='text-xl font-semibold text-gray-500 mb-4'>FTP Servers</h2>

        <table className='min-w-full border border-gray-400 text-gray-600'>
          <thead>
            <tr className=''>
              <th className='py-2 border border-gray-400'>Name</th>
              <th className='py-2 border border-gray-400'>Link</th>
              <th className='py-2 border border-gray-400'>status</th>
            </tr>
          </thead>

          <tbody>
            {
              ftp.map( (data,index) => {
                return (
                  <tr key={index}>
                    <td  className='py-2 border border-gray-400 text-center'>{data.name}</td>
                    <td  className='py-2 border border-gray-400 text-center'>{data.link}</td>
                    <td  className='py-2 border border-gray-400 text-center text-green-500'>{data.status}</td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>

      </section>
    </div>
  )
}

export default FtpServers