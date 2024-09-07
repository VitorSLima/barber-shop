import "./globals.css"
import Footer from "./_components/footer"
import { Toaster } from "sonner"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Authprovider from "./_providers/auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Barber Shop",
  description: "© 2024 Copyright Vitor Lima",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Authprovider>
          <div className="flex h-full flex-col">
            <div className="flex-1"> {children} </div>
            <Footer />
          </div>
        </Authprovider>
        <Toaster />
      </body>
    </html>
  )
}
