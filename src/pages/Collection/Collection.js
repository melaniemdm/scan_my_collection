import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import "./style.css";
import { FaArrowLeft } from "react-icons/fa";

export default function Collection() {
  return (
    <div className="header-collection">
      <Link to="/" className="back-link">
      <FaArrowLeft style={{ color: "#fafafa", marginRight: "10px" }} />
        Accueil
      </Link>
     

      <h1 className="collection-title">Ma Collection</h1>

      <Card />
    </div>
  );
}
