import "./style.css";
export default function Items({book}) {
   
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
    </div>
  );
}
