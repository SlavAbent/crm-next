import ListsClient from './ListClient'
import { Color, List, Task } from '@/app/dashboard/components/Aside/types'

export default function Lists({ data }: { data: [List[], Color[], Task[]] }) {
  const [lists, colors, tasks] = data

  return <ListsClient lists={lists} colors={colors} tasks={tasks} />
}
