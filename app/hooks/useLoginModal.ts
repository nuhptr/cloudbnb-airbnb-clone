import { create } from "zustand"

const useLoginModal = create<LoginModalTypesStore>((set) => ({
   isOpen: false,
   onOpen: () => set({ isOpen: true }),
   onClose: () => set({ isOpen: false }),
}))

export default useLoginModal
