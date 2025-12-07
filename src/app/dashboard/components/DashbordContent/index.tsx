'use client'

import { List, Color, Task } from '../Aside/types'
import { useTasksContext } from '@/shared/hooks/useTasksContext'

interface Props {
  lists: List[]
  colors: Color[]
  tasks: Task[]
}

export default function DashboardContent({ tasks }: Props) {
  const { selectedListId } = useTasksContext()

  const filteredTasks = selectedListId
    ? tasks.filter((task) => task.listId === selectedListId)
    : tasks

  return (
    <div>
      {filteredTasks.map((task) => (
        <div key={task.id}>{task.text}</div>
      ))}
    </div>
  )
}
