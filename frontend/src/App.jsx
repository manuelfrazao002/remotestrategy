import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import aboutUs from "./imgs/energia_renovavel/IMG_6516.jpg";
import "./App.css";
import PortfolioSection from "./components/PortfolioSection";
import ProjectDetails from "./pages/ProjectDetails";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import ContactForm from "./components/contactform";
import ficha1 from "./imgs/ficha_1.jpg";
import ficha2 from "./imgs/ficha_2.jpg";
import useFadeInOnScroll from "./hooks/useFadeInOnScroll";

import getBackgroundImages from "./utils/getBackgroundImages";

function App() {
  const [showImages, setShowImages] = useState(false);

  const [refAbout, isVisibleAbout] = useFadeInOnScroll();
  const [refPortfolio, isVisiblePortfolio] = useFadeInOnScroll();
  const [refContact, isVisibleContact] = useFadeInOnScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowImages(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundImages = getBackgroundImages();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

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
      if (deltaX > 0) {
        // Swipe left
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
      } else {
        // Swipe right
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + backgroundImages.length) % backgroundImages.length
        );
      }
      setTouchStartX(null);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
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
                        }`}
                      />
                    ))}
                  </div>
                </section>

                <section
                  id="about-us"
                  ref={refAbout}
                  className={`fade-in ${isVisibleAbout ? "visible" : ""}`}
                >
                  <div className="container-imgs">
                    <img
                      className={`ficha-image ficha-1 ${
                        showImages ? "show" : ""
                      }`}
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
                      className={`ficha-image ficha-2 ${
                        showImages ? "show" : ""
                      }`}
                      src={ficha2}
                      alt="ficha_2"
                    />
                  </div>
                  <div className="aboutus-container">
                    <img
                      id="img-aboutus"
                      src={aboutUs}
                      alt="sobre_nos_section"
                    />
                    <div id="aboutus-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </section>

                <PortfolioSection />

                <ContactForm />

                <Footer />
              </div>
            </>
          }
        />

        <Route path="/projeto/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
