'use client'

import { useTasksContext } from '@/shared/hooks/useTasksContext'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Color, List, Task } from './types'

interface Props {
  lists: List[]
  colors: Color[]
  tasks: Task[]
}

export default function ListsClient({ lists, colors }: Props) {
  const { setSelectedListId } = useTasksContext()

  return (
    <div className="flex flex-col gap-y-2">
      {lists.map(list => {
        const folderColor = colors.find(c => Number(c.id) === list.colorId)

        return (
          <Button
            key={list.id}
            size="sm"
            variant="ghost"
            className="flex items-center justify-start w-full"
            onClick={() => setSelectedListId(Number(list.id))}
          >
            <Badge
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: folderColor?.hex }}
            />
            <span>{list.name}</span>
          </Button>
        )
      })}
    </div>
  )
}
