import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IStore {
  refs: React.RefObject<HTMLDivElement>[];  
  setRef: (newRef: React.RefObject<HTMLDivElement>) => void;
}

export const useStore = create<IStore>()(
  devtools((set) => ({
    refs: [],
    setRef: (newRef: React.RefObject<HTMLDivElement>) => set((state) => ({ refs: [...state.refs, newRef] }),),    
  }))
);