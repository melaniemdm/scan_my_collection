import { Link } from "react-router-dom";
import "./style.css";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-grid">
        <div className="card">Stylo Legami</div>
        <Link to="/bibliotheque" className="card">Bibliothèque</Link>
        <div className="card">Autre</div>
      </div>
    </div>
  );
}
