'use client'

import { use } from 'react'
import { List, Color, Task } from '../Aside/Lists/types'
import { useTasksContext } from '@/shared/context/TasksContext'

export default function DashboardContent({
  dataAllPromises,
}: {
  dataAllPromises: Promise<[List[], Color[], Task[]]>
}) {
  const { selectedListId } = useTasksContext()
  const [lists, colors, tasks] = use(dataAllPromises)

  console.log(selectedListId)
  //   console.log(tasks)

  const filteredTasks = selectedListId
    ? tasks.filter(task => task.listId === selectedListId)
    : tasks

  return (
    <>
      {filteredTasks.map(task => (
        <div key={task.id}>{task.text}</div>
      ))}
    </>
  )
}
