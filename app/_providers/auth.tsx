"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

const Authprovider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default Authprovider
