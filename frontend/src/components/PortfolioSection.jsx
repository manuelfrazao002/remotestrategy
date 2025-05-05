import React, { useState } from "react";
import { Link } from "react-router-dom";
import portfolioItems from "../data/portfolioData";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const categorias = ["Todos", "Categoria 1", "Categoria 2"];

  const filteredItems =
    selectedCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

      const handleTilt = (e) => {
        const card = e.currentTarget;
        const inner = card.querySelector('.tilt-inner');
      
        const { width, height, left, top } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
      
        const rotateX = ((y / height) - 0.5) * -10;
        const rotateY = ((x / width) - 0.5) * 10;
      
        inner.style.setProperty('--rotateX', `${rotateY}deg`);
        inner.style.setProperty('--rotateY', `${rotateX}deg`);
      };
      
      const resetTilt = (e) => {
        const inner = e.currentTarget.querySelector('.tilt-inner');
        inner.style.setProperty('--rotateX', '0deg');
        inner.style.setProperty('--rotateY', '0deg');
      };
      

  return (
    <section id="cards-section">
      <h2>Portfólio</h2>

      <div className="portfolio-filters">
  {categorias.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`filter-button ${selectedCategory === cat ? "active" : ""}`}
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
          className="card tilt-card"
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
        >
          <div className="tilt-inner">
            <img src={item.images[0]} alt={item.title} className="card-img" />
            <div className="card-overlay">
              <p>{item.title}</p>
              <p className="plus-about">+</p>
            </div>
          </div>
        </Link>
        
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
