import { InputHTMLAttributes } from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

declare type InputTypes = {
   id: string
   label: string
   type?: InputHTMLAttributes<HTMLInputElement>["type"]
   disabled?: boolean
   formatPrice?: boolean
   required?: boolean
   register: UseFormRegister<FieldValues>
   errors: FieldErrors
}
