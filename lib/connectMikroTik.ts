import prismaDB from "@/prisma/pot";
import { User } from "@prisma/client";
import { RouterOSAPI } from "node-routeros";

export const ConnectMikroTik = async () => {
    try {
        const routerInof:User = await prismaDB.user.findFirst({where:{ userType:"admin"}}) as User;
        const router = new RouterOSAPI({
            host: routerInof.connectivityType,
            user: routerInof.houseNo,
            password: routerInof.floorNo,
            port: 8728
          });
          return router;
    } catch (error) {
        console.log("Problem on the MICKROTIK connecntion :-> "+error);
    } finally {
        await prismaDB.$disconnect();
    }
}