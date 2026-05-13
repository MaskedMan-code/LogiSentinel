import { create } from 'zustand'
import type { Role } from '@/lib/types'

type AppState = {
  role: Role
  setRole: (role: Role) => void
}

export const useAppStore = create<AppState>((set) => ({
  role: 'enterprise',
  setRole: (role) => set({ role }),
}))
