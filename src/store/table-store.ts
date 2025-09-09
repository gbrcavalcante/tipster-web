import { create } from "zustand";
import { Match } from "@/types/match";  

type useTableStoreTypes = {
  matchs: Match[]; 
  setMatchs: (rowSelected: Match[]) => void; 
  cleanMatchs: () => void;
};

export const useTableStore = create<useTableStoreTypes>((set) => ({
  matchs: [],
  setMatchs: (rowSelected) => set({ matchs: rowSelected }),
  cleanMatchs: () => set({ matchs: [] }),
}));
