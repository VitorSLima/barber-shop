import { db } from "../_lib/prisma"

export const getBarbershops = async () => {
 return await db.barbershop.findMany()
}
