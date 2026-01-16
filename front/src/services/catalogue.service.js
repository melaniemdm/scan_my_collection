//Charge le catalogue depuis /public/catalogue.json
export async function loadCatalogue() {
  const res = await fetch("/catalogue.json");
  if (!res.ok) throw new Error("catalogue.json introuvable");

  const data = await res.json();
  return Array.isArray(data) ? data : data.titles ?? [];
}
//Trouve un livre par ISBN dans une liste
export function findBookByIsbn(catalogue, isbn) {
  const clean = String(isbn).replace(/\D/g, ""); // garde uniquement les chiffres
  return catalogue.find((b) => String(b.isbn).replace(/\D/g, "") === clean) || null;
}