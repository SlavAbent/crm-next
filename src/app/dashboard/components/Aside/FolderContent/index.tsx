import { getColors, getLists, getTasks } from '@/lib/api/api'
import Lists from '@/app/dashboard/components/Aside/Lists'
import { Color, List, Task } from '@/app/dashboard/components/Aside/types'

export default async function Folders() {
  const data: [List[], Color[], Task[]] = await Promise.all([
    getLists(),
    getColors(),
    getTasks(),
  ])
  return <Lists data={data} />
}
