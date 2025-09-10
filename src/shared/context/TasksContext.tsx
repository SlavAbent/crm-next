'use client'

import { createContext, useContext, useState } from 'react'

type TasksContextType = {
  selectedListId: number | null
  setSelectedListId: (id: number | null) => void
}

const TasksContext = createContext<TasksContextType | undefined>(undefined)

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [selectedListId, setSelectedListId] = useState<number | null>(null)

  return (
    <TasksContext.Provider value={{ selectedListId, setSelectedListId }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasksContext() {
  const ctx = useContext(TasksContext)
  if (!ctx) {
    throw new Error('useTasksContext must be used inside <TasksProvider>')
  }
  return ctx
}
