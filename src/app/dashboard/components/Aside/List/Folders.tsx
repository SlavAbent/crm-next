import { getLists } from '@/lib/api/getLists'
import { Suspense } from 'react'
import Lists from './Lists'

export default function Folders() {
  const listsPromise = getLists()
  return (
    <Suspense fallback={<div>Загрузка списков...</div>}>
      <Lists listsPromise={listsPromise} />
    </Suspense>
  )
}
