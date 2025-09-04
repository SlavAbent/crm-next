'use client'

type List = { id: number; name: string; colorId: number }

export default function Lists({ lists }: { lists: List[] }) {
  return (
    <div className="">
      {lists.map(list => (
        <div key={list.id}>
          <p>{list.name}</p>
        </div>
      ))}
    </div>
  )
}
