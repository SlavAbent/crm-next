export async function getLinksMenu() {
  const res = await fetch(`${process.env.API_URL}/menu`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Ошибка загрузки меню");

  return res.json();
}
