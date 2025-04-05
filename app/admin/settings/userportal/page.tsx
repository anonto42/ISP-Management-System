import prismaDB from '@/prisma/pot';
import Inner from './Inner';

export interface info{
  name: string;
  link: string;
  id: string;
 
}

const SettiengsPortal = async () => {
  const getServersInfo = await prismaDB.servers.findMany();
  const serverInfo: info[] = getServersInfo.map( server => ({name: server.name, link: server.url, id: server.id}))
  return (
    <div className='p-6 w-full h-svh relative'>
      <Inner servers={serverInfo} />
    </div>
  )
}

export default SettiengsPortal