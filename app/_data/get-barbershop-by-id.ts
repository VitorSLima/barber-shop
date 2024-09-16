"use server"

import { db } from "../_lib/prisma"

export interface BarbershopPageProps {
  params: {
    id: string
    name: string
  }
}

export const getBarbershopById = async ({ params }: BarbershopPageProps) => {
  return await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })
}
