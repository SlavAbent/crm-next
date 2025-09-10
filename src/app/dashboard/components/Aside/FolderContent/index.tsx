import { getColors } from '@/lib/api/getColors'
import { getLists } from '@/lib/api/getLists'
import { getTasks } from '@/lib/api/getTasks'
import { Suspense } from 'react'
import Lists from '../Lists'

export default function Folders() {
  const dataPromise = Promise.all([getLists(), getColors(), getTasks()])
  return (
    <Suspense fallback={<div>Загрузка списков...</div>}>
      <Lists dataPromise={dataPromise} />
    </Suspense>
  )
}
