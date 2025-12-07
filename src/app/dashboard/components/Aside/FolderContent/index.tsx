import { Suspense } from 'react'
import Lists from '@/app/dashboard/components/Aside/Lists'
import { getColors, getLists, getTasks } from '@/lib/api/api'


export default async function Folders() {
  const dataPromise = Promise.all([getLists(), getColors(), getTasks()])

  return (
    <Suspense fallback={<div>Загрузка списков...</div>}>
      <Lists dataPromise={dataPromise} />
    </Suspense>
  )
}
