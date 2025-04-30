import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import background from "./imgs/background_city.jpg";
import aboutUs from "./imgs/about_us.jpg";
import "./App.css";
import PortfolioSection from "./components/PortfolioSection";
import ProjectDetails from "./ProjectDetails";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import ContactForm from "./components/contactform";

function App() {
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
                  <img id="background" src={background} alt="background_city" />
                </section>

                <section id="about-us">
                  <h2>Sobre Nós</h2>
                  <div className="aboutus-container">
                    <img
                      id="img-aboutus"
                      src={aboutUs}
                      alt="sobre_nos_section"
                    />
                    <div id="aboutus-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry...
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
