import logo from "../imgs/logo_cor.png";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import getBackgroundImages from "../utils/getBackgroundImages";
import img5 from "../imgs/exteriores/0.jpg";

function NavBar() {
  const backgroundImages = getBackgroundImages();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);
  
    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

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



  return (
    <>
              <div>
                <nav id="navbar">
                    <img src={logo} className="logo" alt="Remote Strategy Logo" onContextMenu={(e) => e.preventDefault()}/>
                  <aside id="links-aside">
                    <Link to="/">
                      <p>Voltar</p>
                    </Link>
                  </aside>
                </nav>
                </div>
                <section id="background-sec-detalhes">
                        <div
                          id="background-carousel-detalhes"
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
                </>
  );
}

export default NavBar;
