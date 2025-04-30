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
            className="card"
          >
            <img src={item.images[0]} alt={item.title} className="card-img" />
            <div className="card-overlay">
              <p>Mais Detalhes</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
