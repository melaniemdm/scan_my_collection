import { useEffect, useState } from "react";
import "./style.css";
import { getOwnedIsbns } from "../../services/collection.service";
export default function Items({book}) {
   const [ownedIsbns, setOwnedIsbns] = useState([]);
useEffect(() => {
  setOwnedIsbns(getOwnedIsbns());
}, []);
 const owned = ownedIsbns.includes(String(book.isbn));
  return (
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
      {owned && <div className="owned-badge">✅ Cool, je l’ai</div>}
        
    </div>
  );
}
