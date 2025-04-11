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
          <img id="img-aboutus" src={aboutUs} alt="sobre_nos_section" />
          <div id="aboutus-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </section>

        <section id="cards-section">
          <h2>Portfólio</h2>
          <div className="cards-grid">
            <div className="card">
              <img src={portfolioImg} alt="Serviço" className="card-img" />
              <div className="card-content">
                <button className="more-info-btn">Mais Informações</button>
              </div>
            </div>

            <div className="card">
              <img src={portfolioImg} alt="Serviço" className="card-img" />
              <div className="card-content">
                <button className="more-info-btn">Mais Informações</button>
              </div>
            </div>

            <div className="card">
              <img src={portfolioImg} alt="Serviço" className="card-img" />
              <div className="card-content">
                <button className="more-info-btn">Mais Informações</button>
              </div>
            </div>

            <div className="card">
              <img src={portfolioImg} alt="Serviço" className="card-img" />
              <div className="card-content">
                <button className="more-info-btn">Mais Informações</button>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer">
          <p>&copy; 2025 Remote Strategy. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#about-us">Sobre Nós</a> |<a href="#">Contato</a> |
            <a href="/privacidade">Política de Privacidade</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
