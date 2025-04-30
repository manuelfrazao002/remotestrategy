import logo from "../imgs/logo_cor.png";

function NavBar() {
  return (
    <>
              <div>
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
                    <a href="#contactos">
                      <p>Contactos</p>
                    </a>
                  </aside>
                </nav>
                </div>
                </>
  );
}

export default NavBar;
