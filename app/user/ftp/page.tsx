import React from 'react'

const FtpServers = () => {
  const ftp = [
    {name:"video",link:"http://pvhideo.pon",updated:"20-03-0222",status:"GO"},
    {name:"reals",link:"http://ulu.XXX",updated:"20-03-0202",status:"OFF"},
    {name:"videos",link:"http://statues.XXX",updated:"02-30-2002",status:"PANDING"},
  ]
  return (
    <div className='p-4'>
      <section className='bg-white shadow-lg rounded-lg p-3'>
        <h2 className='text-xl font-semibold text-gray-500 mb-4'>FTP Servers</h2>

        <table className='min-w-full border border-gray-400 text-gray-600'>
          <thead>
            <tr className=''>
              <th className='py-2 border border-gray-400'>Name</th>
              <th className='py-2 border border-gray-400'>Link</th>
              <th className='py-2 border border-gray-400'>Updated</th>
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
                    <td  className='py-2 border border-gray-400 text-center'>{data.updated}</td>
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