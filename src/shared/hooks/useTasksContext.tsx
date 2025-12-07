'use client'

import { createContext, useContext, useState } from 'react'

type TasksContextType = {
  selectedListId: number | null
  setSelectedListId: (id: number | null) => void
}

const UseTasksContext = createContext<TasksContextType | undefined>(undefined)

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [selectedListId, setSelectedListId] = useState<number | null>(null)

  return (
    <UseTasksContext.Provider value={{ selectedListId, setSelectedListId }}>
      {children}
    </UseTasksContext.Provider>
  )
}

export function useTasksContext() {
  const ctx = useContext(UseTasksContext)
  if (!ctx) {
    throw new Error('useTasksContext must be used inside <TasksProvider>')
  }
  return ctx
}
