import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import aboutUs from "./imgs/about_us.jpg";
import "./App.css";
import PortfolioSection from "./components/PortfolioSection";
import ProjectDetails from "./pages/ProjectDetails";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import ContactForm from "./components/contactform";
import ficha1 from "./imgs/ficha_1.jpg";
import ficha2 from "./imgs/ficha_2.jpg";
import portfolioItems from "./data/portfolioData";


function App() {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowImages(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                  <div id="background" />
                </section>

                <section id="about-us">
                  <div className="container-imgs">
                    <img
                      className={`ficha-image ficha-1 ${
                        showImages ? "show" : ""
                      }`}
                      src={ficha1}
                      alt="ficha_1"
                    />
                    <h2>Sobre Nós</h2>
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
