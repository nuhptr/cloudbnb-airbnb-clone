import { create } from "zustand"

const useRegisterModal = create<RegisterModalTypeStore>((set) => ({
   isOpen: false,
   onOpen: () => set({ isOpen: true }),
   onClose: () => set({ isOpen: false }),
}))

export default useRegisterModal
