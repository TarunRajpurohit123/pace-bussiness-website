import { create } from "zustand";

const useStore = create((set) => ({
  isProgress: false,
  isProgressHandle: () => set((state) => ({ isProgress: true })),
  isProgressHandleFalse: () => set((state) => ({ isProgress: false })),
}));

export { useStore };
