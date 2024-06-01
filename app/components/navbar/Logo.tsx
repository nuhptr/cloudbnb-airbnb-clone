"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export const Logo = () => {
   return (
      <Image
         src="/images/img_logo.png"
         alt="logo"
         width="50"
         height="50"
         className="hidden cursor-pointer md:block"
      />
   )
}
