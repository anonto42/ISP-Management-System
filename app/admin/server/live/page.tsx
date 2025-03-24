import PaginationComponent from '@/components/paginate/Paginate'
import React from 'react'

interface liveConnectedUser {
  id: string;
  ipAddress: string;
  type:string;
  mac:string;
  upTime:string;
  remark:number
}

const connectedUser:liveConnectedUser[] = [
  {
    id:"anonto10",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"jari",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"asif",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"sukhi",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"durjoy",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"ali",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"rifat",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"sokhi",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"ontor",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"faiju",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },

  {
    id:"safi",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"rusafi",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"sojib",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"rafi",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"khan",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"jubir",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"alif",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },
  {
    id:"rafa",
    ipAddress:"202.233.6.86",
    type:"pppoe",
    mac:"23:2F:02:E3:93",
    upTime:"20/03/2024",
    remark:234234
  },

];

const page = () => {
  return (
    <div className='h-full w-full'>
      <section className='w-full max-w-[1600px] p-6 mx-auto'>
        <PaginationComponent<liveConnectedUser>
          paginateTitle='Live Connection report'
          action={{view:true}}
          fields={["ID","IP Address","Type","MAC","Uptime","Remark"]}
          allData={connectedUser}
          addUserButton
          key={"All User"}
        />
      </section>
    </div>
  )
}

export default page