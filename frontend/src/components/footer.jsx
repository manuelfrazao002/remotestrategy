function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <p>&copy; {currentYear} Remote Strategy. Todos os direitos reservados.</p>
      <div className="footer-links">
        <a href="#about-us">Sobre Nós</a>|<a href="#cards-section">Portfolio</a>
        |<a href="/privacidade">Política de Privacidade</a>
      </div>
    </footer>
  );
}

export default Footer;
