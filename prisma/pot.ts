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

type ModelName = keyof Omit<PrismaClient, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends" | "$executeRaw" | "$executeRawUnsafe" | "$queryRaw" | "$queryRawUnsafe">;

async function deleteRecord(modelName: ModelName, id: string) {
  const model = prismaDB[modelName] as any;

  if (!model?.delete) {
    throw new Error(`Model "${modelName.toString()}" does not support delete operation`);
  }

  const deleted = await model.delete({
    where: { id },
  });

  return deleted;
}

async function dynamicSchema(modelName: ModelName) {
     const model = prismaDB[modelName] as any;
     
     if (!model?.findMany) {
       throw new Error(`Model "${modelName.toString()}" does not support findMany operation`);
     }

    const allRecords = await model.findMany();
    
    return allRecords;
}

export { deleteRecord, dynamicSchema }