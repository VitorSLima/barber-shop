"use server"

import { db } from "../_lib/prisma"

export interface BarbershopsPageProps {
  searchParams: {
    title?: string
    service?: string
  }
}

export const getBarbershopsBySearchParams = async ({
  searchParams,
}: BarbershopsPageProps) => {
  return await db.barbershop.findMany({
    where: {
      OR: [
        searchParams?.title
          ? {
              name: {
                contains: searchParams?.title,
                mode: "insensitive",
              },
            }
          : {},
        searchParams?.service
          ? {
              services: {
                some: {
                  name: {
                    contains: searchParams?.service,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
    },
  })
}
