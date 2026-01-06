import { Link } from "react-router-dom";
import "./style.css";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card-grid">
        <div className="card">Objet 1</div>
        <div className="card">Objet 2</div>
        <div className="card">Objet 3</div>
      </div>
    </div>
  );
}
