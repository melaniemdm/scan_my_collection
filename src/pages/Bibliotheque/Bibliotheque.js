import './style.css';

//liste des livres
const books = [
  { id: 1, title: "Au boulot. M. Costaud", isbn: "9782012248908" },
  { id: 2, title: "Be... Be... Bonjour, Mme Timide", isbn: "9782012251953" },
  
]

export default function Bibliotheque(){

    return (
        <div className="header-bibliotheque"><h1 className="bibliotheque-title">Mes Collections</h1>
       
      <div className="biblio-grid">
        {books.map((book) => (
          <div className="biblio-card" key={book.id}>
            <div className="biblio-card-title">{book.title}</div>
            
            <div className="biblio-card-isbn">ISBN : {book.isbn}</div>
          </div>
        ))}
      </div>
        </div> 
    )
}