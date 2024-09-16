"use server"

import { db } from "../_lib/prisma"

export const getPopularBarbershops = async () => {
  return await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
}
