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
  const [showScrollToTop, setShowScrollToTop] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <button
          onClick={() => navigate("/", { state: { scrollToPortfolio: true } })}
          style={{ marginBottom: "1rem" }}
        >
          ← Voltar
        </button>

        <h1 className="project_title">{projeto.title}</h1>
        <p>{projeto.description}</p>
        <p>&copy; Imagens com todos os direitos reservados.</p>

        <div className="project-gallery">
          {projeto.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Imagem ${index + 1}`}
              className="project-image"
              onClick={() => openModal(index)}
              onContextMenu={(e) => e.preventDefault()}
              style={{ width: "500px", margin: "1rem", cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="close-btn">
              ×
            </button>
            <button onClick={prevImage} className="nav-btn nav-left">
              ←
            </button>
            <img
              src={projeto.images[currentIndex]}
              alt={`Imagem ${currentIndex + 1}`}
              className="modal-image"
              onContextMenu={(e) => e.preventDefault()}
            />
            <button onClick={nextImage} className="nav-btn nav-right">
              →
            </button>
          </div>
        </div>
      )}

      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            padding: "10px 15px",
            fontSize: "18px",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            zIndex: 1000,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          ↑ Topo
        </button>
      )}

      <Footer />
    </>
  );
};

export default ProjectDetails;
