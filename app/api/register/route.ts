import bcrypt from "bcrypt"

import { prismaDb } from "@/app/lib/prismadb"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
   const body = await request.json()
   const { email, name, password } = body

   const hashedPassword = await bcrypt.hash(password, 12)

   const user = await prismaDb.user.create({
      data: { email, name, hashedPassword },
   })

   return NextResponse.json(user)
}
