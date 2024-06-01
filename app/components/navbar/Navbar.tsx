import { Container } from "@/app/components/Container"

import { Logo } from "@/app/components/navbar/Logo"
import { Search } from "@/app/components/navbar/Search"

export const Navbar = () => {
   return (
      <header className="fixed z-10 w-full shadow-sm">
         <div className="py-4 border-b-[1px]">
            <Container>
               <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                  <Logo />
                  <Search />
               </div>
            </Container>
         </div>
      </header>
   )
}
