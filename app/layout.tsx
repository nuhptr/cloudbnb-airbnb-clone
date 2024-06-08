import type { Metadata } from "next"
import { Nunito } from "next/font/google"

import "./globals.css"

import { ToasterProvider } from "@/app/providers/ToasterProvider"

import { Navbar } from "@/app/components/navbar/Navbar"
import { RegisterModal } from "@/app/components/modals/RegisterModal"
import { LoginModal } from "@/app/components/modals/LoginModal"
import { SessionProvider } from "next-auth/react"

import { currentUser } from "./hooks/useCurrentuser"
import { getUserByEmail } from "./data/user"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Cloudbnb | A better way to rent a place",
   description: "CloudBnB is a platform that connects renters with landlords in a seamless way.",
   // add other seo keywords here
}

type RootLayoutTypes = {
   children: React.ReactNode
}

export default async function RootLayout({ children }: Readonly<RootLayoutTypes>) {
   const user = await currentUser()
   const getUser = await getUserByEmail(user!.email!)

   return (
      <html lang="en">
         <body className={nunito.className}>
            <SessionProvider>
               <RegisterModal />
               <LoginModal />
               <Navbar currentUser={getUser} />
               {children}

               {/* Register Toaster Provider */}
               <ToasterProvider />
            </SessionProvider>
         </body>
      </html>
   )
}
