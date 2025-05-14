import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import portfolioItems from "../data/portfolioData";
import ficha1 from "../imgs/ficha_1.jpg";
import ficha2 from "../imgs/ficha_2.jpg";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categorias = ["Todos", "Categoria 1", "Categoria 2"];

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

  return (
    <section id="cards-section">
      <div className="container-imgs">
        <img
          className={`ficha-image ficha-1 ${showImages ? "show" : ""}`}
          src={ficha1}
          alt="ficha_1"
        />
        <h2>Portfólio</h2>
        <img
          className={`ficha-image ficha-2 ${showImages ? "show" : ""}`}
          src={ficha2}
          alt="ficha_2"
        />
      </div>

      <div className="portfolio-filters">
        {categorias.map((cat) => (
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
        ))}
      </div>

      <div className="cards-grid">
        {filteredItems.map((item) => (
<Link
  to={`/projeto/${item.id}`}
  key={item.id}
  className="tilt-card"
  onMouseMove={handleTilt}
  onMouseLeave={resetTilt}
>
  <div className="tilt-inner">
    <div className="card">
      <img src={item.images[0]} alt={item.title} className="card-img" />
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
