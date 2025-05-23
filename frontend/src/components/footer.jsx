import Logo from "../imgs/logo_preto.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="footer-links">
        <div>
          <img src={Logo} alt="logotipo_remotestrategy" onContextMenu={(e) => e.preventDefault()}/>
        </div>
        <div>
          <p>Rua da Ribeirinha, nº49, Caçador</p>
          <p>3505-466, Viseu</p>
        </div>
        <div>
          <p>+351 962 309 206</p>
          <p>geral.remotestrategy@gmail.com</p>
        </div>
      </div>
      <p>&copy; {currentYear} Remote Strategy. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
