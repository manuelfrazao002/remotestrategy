import Logo from "../imgs/logo_preto.png";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

    const location = useLocation();
  const navigate = useNavigate();

    useEffect(() => {
      if (location.state?.scrollToFooter) {
        const section = document.getElementById("footer");
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth" });
  
            // 🧹 Limpa o estado após o scroll
            navigate(location.pathname, { replace: true, state: {} });
          }, 100);
        }
      }
    }, [location, navigate]);

  return (
    <footer id="footer">
      <div className="footer-links">
        <div>
          <img src={Logo} alt="logotipo_remotestrategy" onContextMenu={(e) => e.preventDefault()}/>
          <Link to="politica-privacidade"><p className="privacy-text">Politica de Privacidade</p></Link>
        </div>
        <div>
          <p>Rua da Ribeirinha, nº49, Caçador</p>
          <p>3505-466, Viseu</p>
        </div>
        <div>
          <p>+351 962 309 206 - Chamada rede local</p>
          <p>geral.remotestrategy@gmail.com</p>
        </div>
      </div>
      <p>&copy; {currentYear} Remote Strategy. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
