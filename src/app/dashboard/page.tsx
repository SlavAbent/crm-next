import { getColors, getLists, getTasks } from '@/lib/api/api'
import DashboardContent from '@/app/dashboard/components/DashbordContent'

export default async function Dashboard() {
  const [lists, colors, tasks] = await Promise.all([
    getLists(),
    getColors(),
    getTasks(),
  ])

  return <DashboardContent lists={lists} colors={colors} tasks={tasks} />
}
