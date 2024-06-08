"use client"

import Image from "next/image"

export const Avatar = () => {
   return (
      <Image
         src="/ic_placeholder.svg"
         width={30}
         height={30}
         className="object-cover rounded-full"
         alt="placeholder avatar"
      />
   )
}
