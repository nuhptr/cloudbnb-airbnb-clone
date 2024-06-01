import { IconType } from "react-icons"

declare type ButtonTypes = {
   label: string
   onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
   disabled?: boolean
   outline?: boolean
   small?: boolean
   icon?: IconType
}
