export type List = { id: string; name: string; colorId: number }
export type Color = { id: string; hex: string; name: string }

export type Task = {
  listId: number
  id: string
  text: string
  completed: boolean
}
