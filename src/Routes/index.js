import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Collection from "../pages/Collection";

export default function CustomsRoutes() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/collection" element={<Collection />} />
      </Routes>
    </Router>
  );
}
