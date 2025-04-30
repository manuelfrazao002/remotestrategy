import { useParams, useNavigate } from "react-router-dom";
import portfolioItems from "./data/portfolioData";
import Footer from "./components/footer";
import "./App.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projeto = portfolioItems.find((item) => item.id === id);

  if (!projeto) {
    return <h2>Projeto não encontrado.</h2>;
  }

  return (
    <>
    <div style={{ padding: "2rem" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
        ← Voltar
      </button>

      <h1>{projeto.title}</h1>
      <p>{projeto.description}</p>

      <div className="project-gallery">
        {projeto.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Imagem ${index + 1}`}
            className="project-image"
            style={{ width: "300px", margin: "1rem" }}
          />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProjectDetails;
