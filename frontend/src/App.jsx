// import Navbar from './components/navbar'
import logo from "./imgs/logo_cor.png";
import background from "./imgs/background_city.jpg";
import aboutUs from "./imgs/about_us.jpg";
import portfolioImg from "./imgs/portfolio/portfolio_img.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* <Navbar></Navbar> */}

        <nav id="navbar">
          <a href="#">
            <img src={logo} className="logo" alt="Remote Strategy Logo" />
          </a>
          <aside id="links-aside">
            <a href="#about-us">
              <p>Sobre Nós</p>
            </a>
            <a href="#cards-section">
              <p>Portfólio</p>
            </a>
          </aside>
        </nav>

        <section id="background-sec">
          <img id="background" src={background} alt="background_city" />
        </section>

        <section id="about-us">
          <h2>Sobre Nós</h2>
          <div className="aboutus-container">
            <img id="img-aboutus" src={aboutUs} alt="sobre_nos_section" />
            <div id="aboutus-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </p>
            </div>
          </div>
        </section>

        <section id="cards-section">
  <h2>Portfólio</h2>
  <div className="cards-grid">
    <a href="/projeto1" className="card">
      <img src={portfolioImg} alt="Serviço" className="card-img" />
      <div className="card-overlay">
        <p>Mais Detalhes</p>
      </div>
    </a>

    <a href="/projeto2" className="card">
      <img src={portfolioImg} alt="Serviço" className="card-img" />
      <div className="card-overlay">
        <p>Mais Detalhes</p>
      </div>
    </a>

    <a href="/projeto3" className="card">
      <img src={portfolioImg} alt="Serviço" className="card-img" />
      <div className="card-overlay">
        <p>Mais Detalhes</p>
      </div>
    </a>

    <a href="/projeto4" className="card">
      <img src={portfolioImg} alt="Serviço" className="card-img" />
      <div className="card-overlay">
        <p>Mais Detalhes</p>
      </div>
    </a>
  </div>
</section>


        <footer id="footer">
          <p>&copy; 2025 Remote Strategy. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#about-us">Sobre Nós</a>|
            <a href="#cards-section">Portfolio</a>|
            <a href="/privacidade">Política de Privacidade</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
