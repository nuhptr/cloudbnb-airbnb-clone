"use client"

import { FC } from "react"
import { BiDollar } from "react-icons/bi"

import { tw } from "@/app/lib/utils"
import { InputTypes } from "./type"

export const Input: FC<InputTypes> = ({
   id,
   label,
   type = "text",
   disabled,
   formatPrice,
   register,
   required,
   errors,
}) => {
   return (
      <div className="relative w-full">
         {formatPrice && <BiDollar size={24} className="absolute text-neutral-700 top-5 left-2" />}
         <input
            id={id}
            disabled={disabled}
            {...register(id, { required })}
            placeholder=""
            type={type}
            className={tw(
               "peer w-full p-4 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed",
               formatPrice ? "pl-9" : "pl-4",
               errors[id]
                  ? "border-rose-500 focus:border-rose-500"
                  : "border-neutral-300 focus:border-black"
            )}
         />
         <label
            htmlFor={id}
            className={tw(
               // 1.125rem = 18px
               "absolute z-10 top-[1.125rem] text-base duration-300 transform -translate-y-4 origin-[0]",
               formatPrice ? "left-9" : "left-4",
               "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
               errors[id] ? "text-rose-500" : "text-zinc-400"
            )}
         >
            {label}
         </label>
      </div>
   )
}
