//GET
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

// UPDATE
export async function updateCompletedTask(taskId: string, completed: boolean) {
  try {
    await fetch(`http://localhost:4000/tasks/${taskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed }),
    })
  } catch (error) {
    console.error('Failed to update task', error)
  }
}

// DELETE
export async function deleteTask(taskId: string) {
  try {
    await fetch(`http://localhost:4000/tasks/${taskId}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error('Failed to update task', error)
  }
}
