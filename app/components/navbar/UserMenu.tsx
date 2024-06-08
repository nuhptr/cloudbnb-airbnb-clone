"use client"

import { FC, useCallback, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { User } from "@prisma/client"

import useRegisterModal from "@/app/hooks/useRegisterModal"
import useLoginModal from "@/app/hooks/useLoginModal"

import { Avatar } from "@/app/components/Avatar"
import { MenuItem } from "@/app/components/navbar/MenuItem"

type UserMenuType = {
   currentUser?: User | null
}

export const UserMenu: FC<UserMenuType> = ({ currentUser }) => {
   const RegisterModalHooks = useRegisterModal()
   const loginModalHooks = useLoginModal()
   const [isOpen, setIsOpen] = useState<boolean>(false)

   const onToggleOpen = useCallback(() => {
      setIsOpen((value) => !value)
   }, [])

   return (
      <div className="relative">
         <div className="flex flex-row items-center gap-3">
            <div
               onClick={() => {}}
               className="hidden px-4 py-3 text-sm font-semibold rounded-full cursor-pointer transition md:block hover:bg-neutral-100"
            >
               CloudBnB your home
            </div>
            <div
               onClick={onToggleOpen}
               className="flex flex-row items-center p-4 border rounded-full cursor-pointer gap-3 transition md:py-3 md:px-4 border-neutral-200 hover:shadow-md"
            >
               <AiOutlineMenu size={18} />
               <div className="hidden md:block">
                  <Avatar />
               </div>
            </div>
         </div>

         {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40dvw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
               <div className="flex flex-col cursor-pointer">
                  {currentUser ? (
                     <>
                        <MenuItem label="My trips" onClick={() => {}} />
                        <MenuItem label="My favorites" onClick={() => {}} />
                        <MenuItem label="My reservations" onClick={() => {}} />
                        <MenuItem label="My properties" onClick={() => {}} />
                        <MenuItem label="Airbnb my home" onClick={() => {}} />
                        <hr />
                        <MenuItem label="Logout" onClick={() => {}} />
                     </>
                  ) : (
                     <>
                        <MenuItem label="Login" onClick={loginModalHooks.onOpen} />
                        <MenuItem label="Sign Up" onClick={RegisterModalHooks.onOpen} />
                     </>
                  )}
               </div>
            </div>
         )}
      </div>
   )
}
