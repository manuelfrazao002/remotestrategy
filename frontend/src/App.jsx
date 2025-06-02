import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import ProjectDetails from "./pages/ProjectDetails";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/projeto/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
