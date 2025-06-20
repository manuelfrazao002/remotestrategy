import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactform";
import PortfolioSection from "../components/PortfolioSection";
import aboutUs from "../imgs/logo_preto.png";
import ficha1 from "../imgs/ficha_1.jpg";
import ficha2 from "../imgs/ficha_2.jpg";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";
import getBackgroundImages from "../utils/getBackgroundImages";
import img5 from "../imgs/exteriores/0.jpg";
import "../App.css";

function HomePage() {
  const location = useLocation();
  const [showImages, setShowImages] = useState(false);
  const [refAbout, isVisibleAbout] = useFadeInOnScroll();
  const backgroundImages = getBackgroundImages();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowImages(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.state?.scrollToFooter) {
      setTimeout(() => {
        document
          .getElementById("about-us")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;
    const touchEndX = e.touches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (Math.abs(deltaX) > 50) {
      setCurrentIndex((prevIndex) =>
        deltaX > 0
          ? (prevIndex + 1) % backgroundImages.length
          : (prevIndex - 1 + backgroundImages.length) % backgroundImages.length
      );
      setTouchStartX(null);
    }
  };

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
      <NavBar />
      <section id="background-sec">
        <div
          id="background-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {backgroundImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`background ${index}`}
              className={`carousel-img ${
                index === currentIndex ? "active" : ""
              } ${img === img5 ? "adjusted-image" : ""}`}
            />
          ))}
        </div>
      </section>

      <section
        id="about-us"
        ref={refAbout}
        className={`fade-in ${isVisibleAbout ? "visible" : ""}`}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="container-imgs">
          <img
            className={`ficha-image ficha-1 ${showImages ? "show" : ""}`}
            src={ficha1}
            alt="ficha_1"
          />
          <a href="#top" className="scroll-top-link">
            <h2 className="hover-title">
              Sobre Nós
              <span className="hover-subtext">Voltar ao topo</span>
            </h2>
          </a>
          <img
            className={`ficha-image ficha-2 ${showImages ? "show" : ""}`}
            src={ficha2}
            alt="ficha_2"
          />
        </div>
        <div className="aboutus-container">
          <img id="img-aboutus" src={aboutUs} alt="sobre_nos_section" />
          <div id="aboutus-text">
            <p style={{textAlign: "justify"}}>
              A Remote Strategy é uma empresa de instalações elétricas e
              telecomunicações, fundada em 2022, com uma base familiar e uma
              visão ambiciosa para o futuro. Nasce da iniciativa de um
              sócio-gerente com mais de 10 anos de experiência em nome
              individual e mais de 30 anos ao serviço de uma das maiores
              empresas de referência na área de Viseu. Esta combinação de
              conhecimento técnico, espírito empreendedor e proximidade pessoal
              reflete-se em cada projeto que realizamos.</p>

              <p style={{textAlign: "justify"}}>Somos reconhecidos pela
              Direção Geral de Energia e Geologia (DGEG) como Entidade
              Instaladora de Instalações Elétricas de Serviço Particular, o que
              reforça o nosso compromisso com a conformidade legal, a segurança
              e a qualidade dos nossos serviços.</p>

              <p style={{textAlign: "justify"}}>Na Remote Strategy, acreditamos
              que a excelência não é apenas um objetivo, mas um padrão. Atuamos
              com total transparência, investimos em inovação contínua,
              promovemos o trabalho em equipa e colocamos a segurança e a
              qualidade no centro de tudo o que fazemos.</p>
            
          </div>
        </div>
      </section>

      <PortfolioSection />
      <ContactForm />
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
}

export default HomePage;
