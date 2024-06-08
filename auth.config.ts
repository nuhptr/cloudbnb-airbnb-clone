import type { NextAuthConfig } from "next-auth"
import bcrypt from "bcrypt"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"

import { getUserByEmail } from "@/app/data/user"
import { LoginModel } from "@/app/model/AuthModel"

export default {
   providers: [
      Google({
         clientId: process.env.GOOGLE_CLIENT_ID as string,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      Github({
         clientId: process.env.GITHUB_CLIENT_ID as string,
         clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      }),
      Credentials({
         name: "Credentials",
         credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
         },
         async authorize(credentials) {
            const validateFields = LoginModel.safeParse(credentials)

            if (validateFields.success) {
               const { email, password } = validateFields.data

               const user = await getUserByEmail(email)
               if (!user || !user.hashedPassword) return null

               const checkPassword = await bcrypt.compare(password, user.hashedPassword)
               if (checkPassword) return user
            }

            return null
         },
      }),
   ],
} satisfies NextAuthConfig
