'use client'

import { useTasksContext } from '@/shared/hooks/useTasksContext'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DataPropsType } from '../types'

export default function ListsClient({ lists, colors }: DataPropsType) {
  const { setSelectedListId } = useTasksContext()

  return (
    <div className="flex flex-col gap-y-2">
      {lists.map((list) => {
        const folderColor = colors.find((c) => Number(c.id) === list.colorId)

        return (
          <Button
            key={list.id}
            size="sm"
            variant="ghost"
            className="flex w-full items-center justify-start"
            onClick={() => setSelectedListId(Number(list.id))}
          >
            <Badge
              className="mr-2 h-3 w-3 rounded-full"
              style={{ backgroundColor: folderColor?.hex }}
            />
            <span>{list.name}</span>
          </Button>
        )
      })}
    </div>
  )
}
