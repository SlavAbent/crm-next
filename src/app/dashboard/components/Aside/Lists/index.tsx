'use client'

import clsx from 'clsx'
import { use } from 'react'
import { Color, List, Task } from './types'
import { useTasksContext } from '@/shared/context/TasksContext'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Lists({
  dataPromise,
}: {
  dataPromise: Promise<[List[], Color[], Task[]]>
}) {
  const [lists, colors, tasks] = use(dataPromise)

  const { setSelectedListId } = useTasksContext()

  return (
    <div className="flex flex-col gap-y-[8px]">
      {lists.map(list => {
        const { id, name, colorId } = list

        const folderColor = colors.find(color => {
          return color.id === String(colorId)
        })

        return (
          <Button
            key={id}
            size="sm"
            variant="ghost"
            className="flex items-center justify-start cursor-pointer w-full"
            onClick={() => setSelectedListId(Number(id))}
          >
            <Badge color={folderColor?.name} />
            <span>{name}</span>
          </Button>
        )
      })}
    </div>
  )
}
