import { Link } from "react-router-dom";
import "./style.css";

export default function HeaderNav() {
    return <div className="header-nav-collection">
        <Link to="/" className="back-link">
                    Accueil
        </Link>

        <Link to="/scanner" className=" back-link">
          Scanner
        </Link>
      </div>
}