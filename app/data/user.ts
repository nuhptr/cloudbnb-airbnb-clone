import { prismaDb } from "@/app/lib/prismadb"

export async function getUserByEmail(email: string) {
   try {
      const user = await prismaDb.user.findUnique({ where: { email } })
      return user
   } catch (error) {
      return null
   }
}
