import { create } from 'zustand';

export interface UIStore {
  sidebarIsOpen: boolean;
  headerInTop: boolean;
  setHeaderInTop: (headerInTop: boolean) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarIsOpen: false,
  headerInTop: true,
  setHeaderInTop: (headerInTop: boolean) => set(() => ({ headerInTop })),
  openSidebar: () => set(() => ({ sidebarIsOpen: true })),
  closeSidebar: () => set(() => ({ sidebarIsOpen: false })),
}));
