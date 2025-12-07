import { use } from 'react'
import { Color, List, Task } from './types'
import ListsClient from '@/app/dashboard/components/Aside/Lists/ListClient'

export default function Lists({
                                dataPromise,
                              }: {
  dataPromise: Promise<[List[], Color[], Task[]]>
}) {
  const [lists, colors, tasks] = use(dataPromise)

  return <ListsClient lists={lists} colors={colors} tasks={tasks} />
}
