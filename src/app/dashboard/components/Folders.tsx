import { getLists } from '@/lib/api/getLists'
import { Suspense } from 'react'
import Lists from './Lists'

export async function Folders() {
  const lists = await getLists()
  return (
    <Suspense fallback={<div>Загрузка списков...</div>}>
      <Lists lists={lists} />
    </Suspense>
  )
}
