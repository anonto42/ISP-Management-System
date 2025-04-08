import prismaDB, { ModelName } from "@/prisma/pot";

export default async function dynamicSchema(modelName: ModelName) {
    const model = prismaDB[modelName] as any; // dynamic model access
  
    if (!model?.findMany) {
      throw new Error(`Model "${modelName.toString()}" does not support findMany operation`);
    }
  
    const allRecords = await model.findMany();
    return allRecords;
}