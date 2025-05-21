import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import portfolioItems from "../data/portfolioData";
import Footer from "../components/footer";
import "../App.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projeto = portfolioItems.find((item) => item.id === id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 👇 Scroll para o topo quando o componente monta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!projeto) {
    return <h2>Projeto não encontrado.</h2>;
  }

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % projeto.images.length);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? projeto.images.length - 1 : prev - 1
    );

  return (
    <>
      <div style={{ padding: "2rem" }}>
<button
  onClick={() => navigate("/", { state: { scrollToPortfolio: true } })}
  style={{ marginBottom: "1rem" }}
>
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
              onClick={() => openModal(index)}
              style={{ width: "500px", margin: "1rem", cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="close-btn">×</button>
            <button onClick={prevImage} className="nav-btn nav-left">←</button>
            <img
              src={projeto.images[currentIndex]}
              alt={`Imagem ${currentIndex + 1}`}
              className="modal-image"
            />
            <button onClick={nextImage} className="nav-btn nav-right">→</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProjectDetails;
