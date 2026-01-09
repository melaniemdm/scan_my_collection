
import Card from "../../components/card/card";
import "./style.css";
import HeaderNav from "../../components/herder-nav/headerNav";
export default function Collection() {
  return (
    <div className="header-collection">
     <HeaderNav/>
      <h1 className="collection-title">Mes Collections</h1>

      <Card />
    </div>
  );
}
