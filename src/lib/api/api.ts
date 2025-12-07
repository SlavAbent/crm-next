export async function getLists() {
  const res = await fetch('http://localhost:4000/lists', { cache: 'no-store' })
  if (!res.ok) throw new Error('Ошибка загрузки списков')
  return res.json()
}

export async function getColors() {
  const res = await fetch('http://localhost:4000/colors', { cache: 'no-store' })
  if (!res.ok) throw new Error('Ошибка загрузки цветов')
  return res.json()
}

export async function getTasks() {
  const res = await fetch('http://localhost:4000/tasks', { cache: 'no-store' })
  if (!res.ok) throw new Error('Ошибка загрузки задач')
  return res.json()
}
