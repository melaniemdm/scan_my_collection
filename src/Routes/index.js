import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/Homepage";
import Collection from "../pages/Collection/Collection";
import Bibliotheque from "../pages/Bibliotheque/Bibliotheque";

export default function CustomsRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/bibliotheque" element={<Bibliotheque/>}/>
      </Routes>
    </Router>
  );
}
