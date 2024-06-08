import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

import authConfig from "@/auth.config"
import { prismaDb } from "@/app/lib/prismadb"

export const {
   auth,
   handlers: { GET, POST },
   signIn,
   signOut,
} = NextAuth({
   ...authConfig,
   session: { strategy: "jwt" },
   adapter: PrismaAdapter(prismaDb),
   // secret: process.env.AUTH_SECRET, // already set in .env.local
   debug: process.env.NODE_ENV === "development",
   pages: {
      // for overriding default pages
      signIn: "/",
   },
})
