import { useEffect, useMemo, useState } from "react";
import "./style.css";
import HeaderNav from "../../components/header-nav/headerNav";
import Items from "../../components/items/items";
import Search from "../../components/search/search";

//affiche la bibliotheque
export default function Bibliotheque() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const filteredBooks = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return books;
    return books.filter((book) => book.title.toLowerCase().includes(q));
  }, [books, query]);

  useEffect(() => {
    fetch("catalogue.json")
      .then((response) => response.json())
      .then((data) => {
        setBooks(Array.isArray(data) ? data : data.titles ?? []);
      })
      .catch((err) => console.error("Erreur chargement catalogue:", err));
  }, []);

  return (
    <div className="header-bibliotheque">
      <HeaderNav />

      <h1 className="bibliotheque-title">Bibliotheque</h1>
      <Search value={query} onChange={setQuery} />
      <div className="biblio-grid">
        {filteredBooks.map((book) => (
          <Items key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
