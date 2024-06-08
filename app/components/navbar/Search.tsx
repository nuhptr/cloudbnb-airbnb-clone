"use client"

import { BiSearch } from "react-icons/bi"

export const Search = () => {
   return (
      <div className="w-full py-2 border rounded-full cursor-pointer transition shadow-sm md:w-auto hover:shadow-md">
         <div className="flex flex-row items-center justify-between">
            <div className="px-6 text-sm font-semibold">Anywhere</div>

            <div className="flex-1 hidden px-6 text-sm font-semibold text-center sm:block border-x">
               Any Week
            </div>

            <div className="flex flex-row items-center pl-6 pr-2 text-sm text-gray-600 gap-3">
               <div className="hidden font-medium sm:block">Add Guests</div>
               <div className="p-2 text-white rounded-full bg-rose-500">
                  <BiSearch size={18} />
               </div>
            </div>
         </div>
      </div>
   )
}
