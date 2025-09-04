import { Suspense } from 'react'
import { getLists } from '@/lib/api/getLists'
import Lists from './components/Aside/List/Lists'

export default async function Dashboard() {
  const lists = await getLists()
  return (
    <div className="">
      <p>Список из {lists.length} папок</p>
    </div>
  )
}
