import logo from "../imgs/logo_cor.png";
import { useEffect } from 'react';

function NavBar() {

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);


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
                    <a href="#contact-page">
                      <p>Contactos</p>
                    </a>
                  </aside>
                </nav>
                </div>
                </>
  );
}

export default NavBar;
