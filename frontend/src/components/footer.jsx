import Logo from "../imgs/logo_preto.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
 
  <div className="footer-links">
    <div>
      <img src={Logo} alt="logotipo_remotestrategy" />
    </div>
    <div>
      <p>Rua da Ribeirinha, nº49, Caçador</p>
      <p>Viseu, 3505-456</p>
    </div>
    <div>
      <p>962 309 206</p>
      <p>geral.remotestrategy@gmail.com</p>
    </div>
  </div>
  <p>&copy; {currentYear} Remote Strategy. Todos os direitos reservados.</p>
</footer>

  );
}

export default Footer;
