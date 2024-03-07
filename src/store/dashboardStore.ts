import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface DashboardState {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const useDashboardStore = create<DashboardState>()(
  devtools(
    persist(
      (set) => ({
        isLoggedIn: false,
        setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
      }),
      {
        name: 'betprohub-storage',
      },
    ),
  ),
);
