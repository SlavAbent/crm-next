export async function getColors() {
  const res = await fetch('http://localhost:4000/colors', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Ошибка загрузки данных')
  }

  return res.json()
}
