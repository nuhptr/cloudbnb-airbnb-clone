import { PrismaClient } from "@prisma/client"

declare global {
   var prisma: PrismaClient | undefined
}

export const prismaDb = globalThis.prisma || new PrismaClient()

//*  Prevent multiple instances of Prisma Client in development
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismaDb
