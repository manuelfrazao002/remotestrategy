import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import portfolioItems from "../data/portfolioData";
import Footer from "../components/footer";
import "../App.css";
import NavbarDetalhes from '../components/navbarDetalhes';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projeto = portfolioItems.find((item) => item.id === id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

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
    setShowScrollToTop(window.scrollY > 1000);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <NavbarDetalhes/>
      <div style={{ padding: "2rem" }}>
        {/* <button
          onClick={() => navigate("/", { state: { scrollToPortfolio: true } })}
          style={{ marginBottom: "1rem" }}
        >
          ← Voltar
        </button> */}

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

      <button
  onClick={scrollToTop}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{
    position: "fixed",
    top: "10px",
    left: "50%",
    transform: `translateX(-50%) ${showScrollToTop ? 'translateY(0)' : 'translateY(-100px)'}`,
    padding: "10px 15px",
    fontSize: "18px",
    backgroundColor: "#333",
    color: isHovered ? "#e4b100" : "#fff",
    border: "none",
    borderRadius: "40px",
    cursor: "pointer",
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, opacity 0.3s ease, color 0.2s ease",
    opacity: showScrollToTop ? 1 : 0,
    pointerEvents: showScrollToTop ? 'auto' : 'none',
  }}
>
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{
      transition: "transform 0.2s ease",
      transform: isHovered ? "translateY(-2px)" : "none"
    }}
  >
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
    Voltar ao topo
  </div>
</button>
      <Footer />
    </>
  );
};

export default ProjectDetails;
