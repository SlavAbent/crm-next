'use client'

import { List, Color, Task } from '../Aside/types'
import { useTasksContext } from '@/shared/hooks/useTasksContext'
import { Checkbox } from '@/components/ui/checkbox'
import clsx from 'clsx'
import { useState } from 'react'
import { deleteTask, updateCompletedTask } from '@/lib/api/api'
import { SettingsIcon } from '@/icons/SettingsIcon'
import { DashboardProps } from '@/app/dashboard/components/DashbordContent/type'
import { DeleteIcon } from '@/icons/DeleteIcon'

export default function DashboardContent({ tasks }: DashboardProps) {
  const { selectedListId } = useTasksContext()
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({})
  const [taskList, setTaskList] = useState<Task[]>(tasks)

  const filteredTasks = selectedListId
    ? taskList.filter((task) => task.listId === selectedListId)
    : taskList

  const handleToggleTask = async (
    task: Task,
    value: string | boolean,
    taskId: string,
  ) => {
    const newCompleted = Boolean(value)
    setCheckedMap((prev) => ({ ...prev, [task.id]: Boolean(value) }))
    await updateCompletedTask(taskId, newCompleted)
  }

  const handleDeleteTask = async (taskId: string) => {
    await deleteTask(taskId)

    setTaskList((prev) => prev.filter((task) => task.id !== taskId))
  }

  return (
    <div className="px-8 pt-10 pb-8">
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className="mb-2 flex items-center rounded-2xl px-2 py-3 duration-150 hover:bg-gray-200"
        >
          <Checkbox
            className="mr-2"
            checked={checkedMap[task.id] ?? task.completed}
            onCheckedChange={(value) => handleToggleTask(task, value, task.id)}
          />
          <div
            className={clsx(
              'grow',
              (checkedMap[task.id] ?? task.completed) && 'line-through',
            )}
          >
            {task.text}
          </div>
          <button
            type="button"
            className="ml-4 h-5 w-5"
            onClick={() => handleDeleteTask(task.id)}
          >
            <DeleteIcon className="h-full w-full" />
          </button>
        </div>
      ))}
    </div>
  )
}
