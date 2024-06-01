import type { Metadata } from "next"
import { Nunito } from "next/font/google"

import "./globals.css"

import { Navbar } from "@/app/components/navbar/Navbar"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "CloudBnB | A better way to rent a place",
   description: "CloudBnB is a platform that connects renters with landlords in a seamless way.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en">
         <body className={nunito.className}>
            <Navbar />
            {children}
         </body>
      </html>
   )
}
