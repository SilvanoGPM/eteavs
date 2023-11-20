import { create } from 'zustand';

export interface UIStore {
  sidebarIsOpen: boolean;
  headerInTop: boolean;
  headerFilled: boolean;
  setHeaderInTop: (headerInTop: boolean) => void;
  setHeaderFilled: (headerFilled: boolean) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarIsOpen: false,
  headerInTop: true,
  headerFilled: false,
  setHeaderInTop: (headerInTop: boolean) => set(() => ({ headerInTop })),
  setHeaderFilled: (headerFilled: boolean) => set(() => ({ headerFilled })),
  openSidebar: () => set(() => ({ sidebarIsOpen: true })),
  closeSidebar: () => set(() => ({ sidebarIsOpen: false })),
}));
