import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import ProjectDetails from "./pages/ProjectDetails";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/projeto/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
