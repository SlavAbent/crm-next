export async function getLists() {
  const res = await fetch('http://localhost:4000/lists', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Ошибка загрузки списков');
  }
  return res.json();
}