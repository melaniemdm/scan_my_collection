import { useEffect, useState } from "react";
import "./style.css";
import { addOwnedIsbn, getOwnedIsbns } from "../../services/collection.service";
export default function Items({book}) {
   const [ownedIsbns, setOwnedIsbns] = useState([]);
   
useEffect(() => {
  setOwnedIsbns(getOwnedIsbns());
}, []);


 const owned = ownedIsbns.includes(String(book.isbn));

 const handleAdd = () => {
    addOwnedIsbn(book.isbn);               // 1) écrit dans localStorage
    setOwnedIsbns(getOwnedIsbns());        // 2) recharge l’état pour rafraîchir l’UI
  };


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
      {!owned && <button className="owned-badge" onClick={handleAdd}>Ajouter a ma collection</button>}
      {owned && <div className="owned-badge">✅ Cool, je l’ai</div> }
        
    </div>
  );
}
