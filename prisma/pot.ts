import { PrismaClient } from "@prisma/client";

const prismaClient = () => {
    return new PrismaClient();
}

declare const globalThis:{
    prismaGlobal: ReturnType<typeof prismaClient>
} & typeof global;

const prismaDB = globalThis.prismaGlobal ?? prismaClient();

export default prismaDB;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prismaDB;