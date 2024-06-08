import { auth } from "@/auth"

// for server components get from auth.ts
export const currentUser = async () => {
   const session = await auth()

   return session?.user
}
