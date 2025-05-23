import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import portfolioItems from "../data/portfolioData";
import ficha1 from "../imgs/ficha_1.jpg";
import ficha2 from "../imgs/ficha_2.jpg";
import useFadeInOnScroll from "../hooks/useFadeInOnScroll";

const PortfolioSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const categorias = [
    "Todos",
    "Interiores",
    "Exteriores",
    "Energia Renovável",
    "Deteção de Incêndio",
    "Telecomunicações",
  ];

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollToPortfolio) {
      const section = document.getElementById("cards-section");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });

          // 🧹 Limpa o estado após o scroll
          navigate(location.pathname, { replace: true, state: {} });
        }, 100);
      }
    }
  }, [location, navigate]);

  //Animação fade-in dos elementos
  const [refAbout, isVisibleAbout] = useFadeInOnScroll();
  const [refPortfolio, isVisiblePortfolio] = useFadeInOnScroll();
  const [refContact, isVisibleContact] = useFadeInOnScroll();

  const filteredItems =
    selectedCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const handleTilt = (e) => {
    const card = e.currentTarget;
    const inner = card.querySelector(".tilt-inner");

    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y / height - 0.5) * -10;
    const rotateY = (x / width - 0.5) * 10;

    inner.style.setProperty("--rotateX", `${rotateY}deg`);
    inner.style.setProperty("--rotateY", `${rotateX}deg`);
  };

  const resetTilt = (e) => {
    const inner = e.currentTarget.querySelector(".tilt-inner");
    inner.style.setProperty("--rotateX", "0deg");
    inner.style.setProperty("--rotateY", "0deg");
  };

  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowImages(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="cards-section"
      ref={refAbout}
      className={`fade-in ${isVisibleAbout ? "visible" : ""}`}
    >
      <div className="container-imgs">
        <img
          className={`ficha-image ficha-1 ${showImages ? "show" : ""}`}
          src={ficha1}
          alt="ficha_1"
        />
        <a href="#top" className="scroll-top-link">
          <h2 className="hover-title">
            Portfólio
            <span className="hover-subtext">Voltar ao topo</span>
          </h2>
        </a>
        <img
          className={`ficha-image ficha-2 ${showImages ? "show" : ""}`}
          src={ficha2}
          alt="ficha_2"
        />
      </div>

      <div className="portfolio-filters">
        {isMobile ? (
          <>
            {/* Botão principal que mostra a categoria atual */}
            <button
              className={`filter-button ${
                showMobileCategories ? "active" : ""
              }`}
              onClick={() => setShowMobileCategories(!showMobileCategories)}
              aria-expanded={showMobileCategories}
            >
              {selectedCategory}
            </button>

            {/* Lista de categorias (excluindo a já selecionada) */}
            {showMobileCategories &&
              categorias
                .filter((cat) => cat !== selectedCategory)
                .map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowMobileCategories(false);
                    }}
                    className={`filter-button ${
                      selectedCategory === cat ? "active" : ""
                    }`}
                    aria-pressed={selectedCategory === cat}
                  >
                    {cat}
                  </button>
                ))}
          </>
        ) : (
          categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-button ${
                selectedCategory === cat ? "active" : ""
              }`}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))
        )}
      </div>

      <div className="cards-grid">
        {filteredItems.map((item) => (
          <Link
            to={`/projeto/${item.id}`}
            key={item.id}
            className="tilt-card"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="tilt-inner">
              <div className="card">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="card-img"
                />
                <div className="card-overlay">
                  <p>{item.title}</p>
                  <p className="plus-about">+</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
