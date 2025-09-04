'use client'

import { use } from 'react'

type List = { id: number; name: string; colorId: number }

export default function Lists({
  listsPromise,
}: {
  listsPromise: Promise<List[]>
}) {
  const lists = use(listsPromise)
  return (
    <div>
      {lists.map(list => (
        <div key={list.id}>
          <p>{list.name}</p>
        </div>
      ))}
    </div>
  )
}
