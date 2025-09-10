import { getLists } from '@/lib/api/getLists'
import { getTasks } from '@/lib/api/getTasks'
import DashboardContent from './components/DashbordContent'
import { getColors } from '@/lib/api/getColors'

export default async function Dashboard() {
  const dataAllPromises = Promise.all([getLists(), getColors(), getTasks()])

  return <DashboardContent dataAllPromises={dataAllPromises} />
}
