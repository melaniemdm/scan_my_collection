import { useEffect, useState } from "react";
import "./style.css";
import HeaderNav from "../../components/header-nav/headerNav";

//affiche la bibliotheque
export default function Bibliotheque() {
  const [books, setBooks] = useState([]);

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

      <div className="biblio-grid">
        {" "}
        {books.map((book) => (
          <div className="biblio-card" key={book.id}>
            <img
              className="biblio-card-couverture"
              src={book.url}
              alt={book.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/placeholder-cover.webp";
              }}
            />
            <div className="biblio-card-title">{book.title}</div>
            <div className="biblio-card-isbn">ISBN : {book.isbn}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
