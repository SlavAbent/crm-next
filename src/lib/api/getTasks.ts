export async function getTasks() {
  const res = await fetch('http://localhost:4000/tasks', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Ошибка загрузки данных')
  }

  return res.json()
}
