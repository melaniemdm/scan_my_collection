const STORAGE_KEY = "myCollectionIsbns";

export function getOwnedIsbns() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export function isOwned(isbn) {
  const owned = getOwnedIsbns();
  return owned.includes(String(isbn));
}

export function addOwnedIsbn(isbn) {
  const owned = getOwnedIsbns();
  const clean = String(isbn);

  if (!owned.includes(clean)) {
    const updated = [...owned, clean];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
}

export function removeOwnedIsbn(isbn) {
  const owned = getOwnedIsbns();
  const clean = String(isbn);

  const updated = owned.filter((x) => x !== clean);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
